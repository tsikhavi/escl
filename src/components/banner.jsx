import { useRouter } from "next/router";

const Banner = ({ path, children }) => {
  const router = useRouter();

  return (
    <>
      <section className="w-screen min-h-96 bg-fixed z-10 BackgroundImage bg-cover bg-center bg-no-repeat">
        <div className="w-full h-screen bg-gradient-to-tr from-white ">
          <div className="flex justify-center pt-96 overflow-hidden">
            <button
              type="button"
              onClick={() => router.push(path)}
              className="bg-black text-white p-2 rounded-full">
              {children}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
