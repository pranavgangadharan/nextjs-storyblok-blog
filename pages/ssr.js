import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getHomeContent } from '../lib/api'

export async function getServerSideProps() {
  const homeContent = await getHomeContent();
  return {
    props: {
      homeContent
    },
  };
}

export default function HomeSsr({homeContent}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{homeContent?.Title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {homeContent?.Title}
        </h1>

        <p className={styles.description}>
          {homeContent?.subtitle}
        </p>

        <p className={styles.description}>
          <Link href="/blogs-ssr" style={{"color": "blue"}}> 
            {homeContent?.blogNav}
          </Link>
        </p>
      </main>
    </div>
  )
}
