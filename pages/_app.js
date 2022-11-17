import { storyblokInit } from '@storyblok/react';
import HomeImage from '../components/home/homeImage';
import HomeText from '../components/home/homeText';
import '../styles/globals.css'

const components = {
  homeContent: HomeText,
  homeImage: HomeImage
};



storyblokInit({
  components
});


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
