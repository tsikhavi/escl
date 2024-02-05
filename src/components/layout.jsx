import Navbar from "./navbar";
import Banner from "./banner";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Banner />

      <div className="w-full mx-auto px-20">{children}</div>
      <Footer />
    </>
  );
}
