import HomeContent from '../components/home';
import Layout from '../components/layout';
import { getFooterContent, getHeaderContent, getHomeContent } from '../lib/api'

export async function getStaticProps() {
  const headerData = await getHeaderContent() || null;
  const footerData = await getFooterContent() || null;
  const homeData= await getHomeContent() || null;
  return {
    props: {
      homeData,
      headerData,
      footerData
    },
    revalidate: 10,
  };
}

export default function Home({homeData = null, headerData = null, footerData = null}) {
  const headerContent = headerData && headerData.length > 0 && headerData[0].content;
  const footerContent = footerData && footerData.length > 0 && footerData[0].content;
  const homeContent = homeData && homeData.length > 0 && homeData[0];
  return (
    <Layout headerContent={headerContent || null} footerContent={footerContent || null} mode="isr">
      <HomeContent homeContent={homeContent || null}mode="isr"/>
    </Layout>
  )
}
