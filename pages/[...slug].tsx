import { BLOCK_COMPONENTS } from '@/utils/blockMapper';
import { client, getClient, getGlobalSettings, getPageBySlug } from '@/utils/contentful';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DynamicPage({ page, preview }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; // SSR fallback phase
  }

  if (!page) {
    return <div className="min-h-40">Page not found</div>;
  }

  const blocks = page.fields.pageBlocks || [];

  return (
    <div>
      {preview && (
        <div className="bg-yellow-300 text-black text-center p-1.5 fixed z-50 top-0 left-0 w-full">
          Preview Mode is ON -{' '}
          <Link href="/api/exit-preview" className="underline">
            Exit
          </Link>
        </div>
      )}
      {blocks.map((block: any, idx: number) => {
        const blockType = block.sys.contentType.sys.id;
        const Component = BLOCK_COMPONENTS[blockType];

        if (!Component) {
          return (
            <div className="container" key={idx}>
              Unknown block type: {blockType}
            </div>
          );
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
      const slugArray = slug === '/' ? [] : slug.split('/');

      return {
        params: { slug: slugArray },
      };
    });

  return {
    paths,
    fallback: false, // or true if you want fallback rendering
  };
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const slug = Array.isArray(params?.slug)
    ? params?.slug.length === 0
      ? '/' // handle homepage
      : params?.slug.join('/')
    : params?.slug;

  const client = getClient(preview);
  const page = await getPageBySlug(slug ?? '', client);
  const globalSettings = await getGlobalSettings(client);

  if (!page) {
    return {
      notFound: true, // triggers 404 page
    };
  }

  return {
    props: {
      page,
      globalSettings,
      preview,
    },
    revalidate: 10,
  };
};
