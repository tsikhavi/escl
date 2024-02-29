import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en-US"
      dir="ltr"
      className="h-full w-full scroll-smooth antialiased ">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body
        className=" text-black text-base h-full w-full justify-center overflow-x-hidden 
        bg-white ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
