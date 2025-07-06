import { BLOCK_COMPONENTS } from '@/utils/blockMapper';
import { client, getGlobalSettings, getPageBySlug } from '@/utils/contentful';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function DynamicPage({ page }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; // SSR fallback phase
  }

  if (!page) {
    return <div className="min-h-40">Page not found</div>;
  }

  const blocks = page.fields.pageBlocks || [];
  console.log('🚀 ~ blocks:', blocks);

  return (
    <div>
      {blocks.map((block: any, idx: number) => {
        const blockType = block.sys.contentType.sys.id;

        console.log('🚀 ~ {blocks.map ~ blockType:', blockType);

        const Component = BLOCK_COMPONENTS[blockType];

        if (!Component) {
          return <div key={idx}>Unknown block type: {blockType}</div>;
        }

        return (
          <div key={block.sys.id} className={`cc-${idx} cc-${blockType}`}>
            <Component {...block.fields} />
          </div>
        );
      })}
    </div>
  );
}

// Static Site Generation
export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await client.getEntries({ content_type: 'pageDefault' });

  const paths = entries.items
    .filter((entry: any) => entry.fields?.slug)
    .map((entry: any) => {
      const slug = entry.fields.slug;

      // console.log('🚀 ~ .map ~ slug:', slug);

      const slugArray = slug.split('/');
      // If the slug is 'home', map it to root '/'
      // const slugArray = slug === 'home' ? [] : slug.split('/');

      console.log('🚀 ~ .map ~ slugArray:', slugArray);

      return {
        params: { slug: slugArray },
      };
    });

  return {
    paths,
    fallback: false, // or true if you want fallback rendering
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // let slug: string;

  // if (!params?.slug || (Array.isArray(params.slug) && params.slug.length === 0)) {
  //   slug = 'home'; // root path → homepage
  // } else {
  //   slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
  // }
  const slug = Array.isArray(params?.slug) ? params.slug.join('/') : params?.slug;
  const page = await getPageBySlug(slug ?? '');
  // console.log('📦 Slug:', slug);
  // console.log('📄 Page:', JSON.stringify(page, null, 2));

  const globalSettings = await getGlobalSettings();

  if (!page) {
    return {
      notFound: true, // triggers 404 page
    };
  }

  return {
    props: {
      page,
      globalSettings,
    },
    revalidate: 10,
  };
};
