import BlogDetails from '../../components/blog/blogDetails';
import Layout from '../../components/layout';
import { getBlogBySlug, getFooterContent, getHeaderContent } from '../../lib/api';

export async function getServerSideProps({params}) {
  const headerData = (await getHeaderContent()) || null;
  const footerData = (await getFooterContent()) || null;
  const blog = await getBlogBySlug(params.slug) || null;
  return {
    props: {
      blog,
      headerData,
      footerData
    },
  };
}

export default function Blog({
  blog = null,
  headerData = null,
  footerData = null,
}) {
  const headerContent = headerData && headerData.length > 0 && headerData[0].content;
  const footerContent = footerData && footerData.length > 0 && footerData[0].content;
  return (
    <Layout headerContent={headerContent || null} footerContent={footerContent || null} mode="ssr">
      <BlogDetails blog={blog || null} />
    </Layout>
  );
}
