import { storyblokEditable } from '@storyblok/react';
import styles from "../../styles/Home.module.css";

const HomeImage = ({ blok }) => {
    return (
      <div className={styles.container} {...storyblokEditable(blok)} key={blok._uid}>
         <picture>
        <img
          src={`${blok?.image?.filename}/m/500x500`}
          alt="homeImage"
        />
      </picture>
      </div>
    );
  };
  
  export default HomeImage;