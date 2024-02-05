import { Inter } from "next/font/google";
import Cta from "@/components/cta";
import Faqs from "@/components/faqs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen  flex-col items-center justify-between px-0 py-0 ${inter.className}`}>
        <Cta />

        <Faqs />
      </main>
    </>
  );
}
