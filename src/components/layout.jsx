import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta
          name="keywords"
          content="Cleaning Services in NewYork, Queens, New Jersey, Manhattan, US"
        />
        <meta name="author" content="sautis" />
      </Head>
      <Navbar />
      <div className="w-full container">{children}</div>
      <Footer />
    </>
  );
}
