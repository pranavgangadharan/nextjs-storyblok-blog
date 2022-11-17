import Head from "next/head";
import styles from "../../styles/Home.module.css";
import StoryblokClient from "storyblok-js-client";

export default function BlogDetails({ blog }) {
  let Storyblok = new StoryblokClient({
    accessToken: "GSgDPPR2m3gzyDcup1NHlgtt",
  });
  const createMarkup = (storyblokHTML) => {
    return {
      __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
  };
  return (
    <>
      <Head>
        <title>{blog?.Title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>{blog?.Title}</h1>
      {/* <Image
      src={blog?.Image?.filename}
      alt="blogImage"
      height={500}
      width={500}
      /> */}
      <picture>
        <img
          src={`${blog?.Image?.filename}/m/500x500`}
          alt="blogImage"
          height={500}
          width={500}
        />
      </picture>
      <div dangerouslySetInnerHTML={createMarkup(blog?.Content)} />
    </>
  );
}
