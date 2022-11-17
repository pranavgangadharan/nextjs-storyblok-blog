import { StoryblokComponent, storyblokEditable, useStoryblokState } from "@storyblok/react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function HomeContent({ homeContent, mode = "" }) {
  homeContent = useStoryblokState(homeContent);
  console.log(homeContent);
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
      <div {...storyblokEditable(homeContent?.HomeBody)} key={homeContent._uid}>
        {homeContent?.HomeBody && homeContent?.HomeBody.length ? homeContent?.HomeBody.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        )): null}
        </div>
    </>
  );
}
