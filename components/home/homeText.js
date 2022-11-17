import { storyblokEditable } from '@storyblok/react';
import styles from "../../styles/Home.module.css";

const HomeText = ({ blok }) => {
    console.log(blok);
    return (
      <div className={styles.container} {...storyblokEditable(blok)} key={blok._uid}>
        <h2 className={styles.title}> {blok.text} </h2>
      </div>
    );
  };
  
  export default HomeText;