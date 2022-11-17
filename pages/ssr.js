import HomeContent from '../components/home';
import Layout from '../components/layout';
import { getFooterContent, getHeaderContent, getHomeContent } from '../lib/api'

export async function getServerSideProps() {
  const headerData = await getHeaderContent() || null;
  const footerData = await getFooterContent() || null;
  const homeData= await getHomeContent() || null;
  return {
    props: {
      homeData,
      headerData,
      footerData
    },
  };
}

export default function Home({homeData = null, headerData = null, footerData = null}) {
  const headerContent = headerData && headerData.length > 0 && headerData[0].content;
  const footerContent = footerData && footerData.length > 0 && footerData[0].content;
  const homeContent = homeData && homeData.length > 0 && homeData[0].content;
  return (
    <Layout headerContent={headerContent} footerContent={footerContent} mode="ssr">
      <HomeContent homeContent={homeContent} mode="ssr"/>
    </Layout>
  )
}
