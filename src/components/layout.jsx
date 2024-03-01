import { useRouter } from 'next/router';
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const pageMetadata = {
  home: {
    description: "Professional Cleaning Services in NewYork, Queens, New Jersey, Manhattan, US",
    keywords: "Cleaning Services in NewYork, Queens, New Jersey, Manhattan, US"
  },
  about: {
    description: "About our professional cleaning services in NewYork, Queens, New Jersey, Manhattan, US",
    keywords: "About, Cleaning Services, NewYork, Queens, New Jersey, Manhattan, US"
  },
  services: {
    description: "Our professional cleaning services in NewYork, Queens, New Jersey, Manhattan, US",
    keywords: "Services, Cleaning, NewYork, Queens, New Jersey, Manhattan, US"
  },
  contact: {
    description: "Contact us for professional cleaning services in NewYork, Queens, New Jersey, Manhattan, US",
    keywords: "Contact, Cleaning Services, NewYork, Queens, New Jersey, Manhattan, US"
  },
  book: {
    description: "Book us for professional cleaning services in NewYork, Queens, New Jersey, Manhattan, US",
    keywords: "Book, Cleaning Services, NewYork, Queens, New Jersey, Manhattan, US"
  },
  pricing: {
    description: "Pricing for professional cleaning services in NewYork, Queens, New Jersey, Manhattan, US",
    keywords: "Contact, Cleaning Services, NewYork, Queens, New Jersey, Manhattan, US"
  },
  login: {
    description: "Contact us for professional cleaning services in NewYork, Queens, New Jersey, Manhattan, US",
    keywords: "Contact, Cleaning Services, NewYork, Queens, New Jersey, Manhattan, US"
  }

};

export default function Layout({ children }) {
  const router = useRouter();
  const { pathname } = router;
  const pathSegments = pathname.split('/').filter(Boolean);
  const pageTitle = pathSegments.length > 0 ? pathSegments[0] : 'Home';
  const { description, keywords } = pageMetadata[pageTitle] || pageMetadata['Home'];

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="sautis" />
        <title>{pageTitle === 'Home' ? 'Home Page' : `${pageTitle} Page`}</title>
      </Head>
      <Navbar />
      <div className="w-full container">{children}</div>
      <Footer />
    </>
  );
}
