// ActiveLink.js

import { useRouter } from "next/router";
import Link from "next/link";

function ActiveLink({ children, href }) {
  const router = useRouter();

  // Determine if the link is active
  const isActive = router.asPath === href;

  // Define the link styles
  const linkStyles = `text-gray-800 font-semibold uppercase transition text-xs hover:text-gray-700/75 ${
    isActive
      ? "text-red-500 underline underline-offset-10 decoration-4 "
      : "text-black"
  }`;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={linkStyles}>
      {children}
    </Link>
  );
}

export default ActiveLink;
