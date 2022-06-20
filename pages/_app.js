import '../styles/type.css'
import '../styles/globals.scss'

import Meta from "../components/Navigation/meta.jsx";
import Header from "../components/Navigation/Header.jsx";
import Footer from "../components/Navigation/Footer.jsx";

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Meta />

      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}

export default MyApp
