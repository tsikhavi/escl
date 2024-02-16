import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-indigo-100">
      <form className="w-full md:w-1/3 rounded-lg">
        <div className="flex font-bold justify-center mt-6">
          <Image
            className="h-20 w-20 mb-3"
            src="/unsplash1.jpg"
            width={40}
            height={40}
            alt="dummy"
          />
        </div>
        <h2 className="text-2xl text-center text-gray-200 mb-8">Login</h2>
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Email Address"
                className="
              w-full
              border
              rounded
              px-3
              py-2
              text-gray-700
              focus:outline-none
            "
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="password"
                placeholder="Password"
                className="
              w-full
              border
              rounded
              px-3
              py-2
              text-gray-700
              focus:outline-none
            "
              />
            </div>
          </div>
          <button
            type="submit"
            className="
          w-full
          py-2
          mt-8
          rounded-full
          bg-blue-400
          text-gray-100
          focus:outline-none
        ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
