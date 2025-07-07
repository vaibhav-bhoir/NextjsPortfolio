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
          <section key={block.sys.id} className={`cc-${idx} cc-${blockType} py-16`}>
            <Component {...block.fields} />
          </section>
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
      const slugArray = slug.split('/');

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
  const slug = Array.isArray(params?.slug) ? params?.slug.join('/') : params?.slug;
  const page = await getPageBySlug(slug ?? '');
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
