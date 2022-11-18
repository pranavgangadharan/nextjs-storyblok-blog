import styles from "../../styles/Home.module.css";
import StoryblokClient from "storyblok-js-client";
import { APP_TOKEN } from "../../config/config";

export default function BlogDetails({ blog }) {
  let Storyblok = new StoryblokClient({
    accessToken: process.env.REACT_APP_STORYBLOK_TOKEN || APP_TOKEN,
  });
  const createMarkup = (storyblokHTML) => {
    return {
      __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
  };
  return (
    <>

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
