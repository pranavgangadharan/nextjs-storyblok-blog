import Footer from "./footer";
import Header from "./header";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Layout({ headerContent, footerContent, children, mode, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title || "Blog"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header headerContent={headerContent} mode={mode}/>
        {children}
        <Footer footerContent={footerContent} />
      </main>
    </div>
  );
}
