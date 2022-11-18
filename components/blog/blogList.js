import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Blogs({ blogList, mode="" }) {
  return (
    <>
      <div className={styles.grid}>
        {blogList && blogList.length
          ? blogList.map((blog) => (
              <Link
                href={mode ? `/blogs-${mode}/${blog.slug}` : blog.full_slug}
                className={styles.card}
                key={blog.slug}
              >
                <h2>{blog.content.Title}</h2>
              </Link>
            ))
          : null}
      </div>
    </>
  );
}
