import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function HomeContent({ homeContent, mode=""}) {
  return (
    <>
      <Head>
        <title>{homeContent?.Title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.title}>{homeContent?.Title}</h1>
        <p className={styles.description}>{homeContent?.subtitle}</p>
        <p className={styles.description}>
          <Link href={`/blogs${mode && `-${mode}`}`} style={{ color: "blue" }}>
            {homeContent?.blogNav}
          </Link>
        </p>
    </>
  );
}
