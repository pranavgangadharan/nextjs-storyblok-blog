import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { getBlogList } from "../../lib/api";
import Link from "next/link";

export async function getStaticProps() {
  const blogList = await getBlogList();
  return {
    props: {
      blogList,
    },
    revalidate: 10,
  };
}

export default function BlogListIsr({ blogList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {blogList && blogList.length
            ? blogList.map((blog) => (
                <Link
                  href={`/blogs-isr/${blog.slug}`}
                  className={styles.card}
                  key={blog.slug}
                >
                  <h2>{blog.content.Title}</h2>
                </Link>
              ))
            : null}
        </div>
      </main>
    </div>
  );
}
