import BlogDetails from '../../components/blog/blogDetails';
import Layout from '../../components/layout';
import { getBlogBySlug, getBlogList, getFooterContent, getHeaderContent } from '../../lib/api';

export async function getStaticProps({params}) {
  const headerData = (await getHeaderContent()) || null;
  const footerData = (await getFooterContent()) || null;
  const blog = await getBlogBySlug(params.slug) || null;
  return {
    props: {
      blog,
      headerData,
      footerData
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const data = await getBlogList();
  return {
    paths : data?.map((item) => `/blogs-isr/${item.slug}`),
    fallback: false,
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
    <Layout headerContent={headerContent} footerContent={footerContent} mode="isr">
      <BlogDetails blog={blog && blog} />
    </Layout>
  );
}
