import Footer from "./footer";
import Header from "./header";
import styles from "../styles/Home.module.css";

export default function Layout({ headerContent, footerContent, children, mode }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header headerContent={headerContent} mode={mode}/>
        {children}
        <Footer footerContent={footerContent} />
      </main>
    </div>
  );
}
