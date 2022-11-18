import { StoryblokComponent, storyblokEditable, useStoryblokState } from "@storyblok/react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function HomeContent({ homeContent, mode = "" }) {
  homeContent = useStoryblokState(homeContent);
//   console.log(homeContent);
  return (
    <>
      <h1 className={styles.title}>{homeContent?.content?.Title}</h1>
      <p className={styles.description}>{homeContent?.content?.subtitle}</p>
      <p className={styles.description}>
        <Link href={`/blogs${mode && `-${mode}`}`} style={{ color: "blue" }}>
          {homeContent?.content?.blogNav}
        </Link>
      </p>
      <div {...storyblokEditable(homeContent?.content?.HomeBody)} key={homeContent.content._uid}>
        {homeContent?.content.HomeBody && homeContent?.content.HomeBody.length ? homeContent?.content.HomeBody.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        )): null}
        </div>
    </>
  );
}
