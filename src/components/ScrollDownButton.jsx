import { useRouter } from "next/router";

const ScrollDownButton = ({ path, children }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(path)}
      className="bg-black text-white p-2 rounded-full">
      {children}
    </button>
  );
};

export default ScrollDownButton;
