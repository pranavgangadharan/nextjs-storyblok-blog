import { getBlogList, getFooterContent, getHeaderContent } from "../../lib/api";
import Blogs from "../../components/blog/blogList";
import Layout from "../../components/layout";

export async function getStaticProps() {
  const headerData = (await getHeaderContent()) || null;
  const footerData = (await getFooterContent()) || null;
  const blogList = (await getBlogList()) || null;
  return {
    props: {
      blogList,
      headerData,
      footerData,
    },
    revalidate: 10,
  };
}

export default function BlogList({
  blogList = null,
  headerData = null,
  footerData = null,
}) {
  const headerContent = headerData && headerData.length > 0 && headerData[0].content;
  const footerContent = footerData && footerData.length > 0 && footerData[0].content;
  return (
    <Layout headerContent={headerContent || null} footerContent={footerContent || null} mode="isr">
      <Blogs blogList={blogList || null} mode="isr"/>
    </Layout>
  );
}
