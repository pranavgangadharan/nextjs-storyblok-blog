import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getHomeContent } from '../lib/api'

export async function getStaticProps() {
  const homeContent = await getHomeContent();
  return {
    props: {
      homeContent
    },
    revalidate: 10,
  };
}

export default function HomeIsr({homeContent}) {
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
          <Link href="/blogs-isr" style={{"color": "blue"}}> 
            {homeContent?.blogNav}
          </Link>
        </p>
      </main>
    </div>
  )
}
