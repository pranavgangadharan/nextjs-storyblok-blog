import Head from 'next/head'
import { getAllBlogSlugs, getBlogBySlug } from '../../lib/api';
import styles from '../../styles/Home.module.css'

export async function getStaticProps({params}) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = await getAllBlogSlugs();
  return {
    paths,
    fallback: false,
  };
}

export default function Blog({blog}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{blog.Title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {blog.Title}
        </h1>

        <p className={styles.description}>
          {blog.Content}
        </p>
      </main>
    </div>
  )
}
