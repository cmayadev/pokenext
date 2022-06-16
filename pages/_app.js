import '../styles/type.css'
import '../styles/globals.scss'

import Meta from "../components/meta.jsx";
import Header from "../components/header.jsx";

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Meta />

      <Header />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
