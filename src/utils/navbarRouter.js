import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const linkStyles = ` uppercase transition text-gray-800 text-sm  ${
    isActive
      ? "text-gray-700 font-semibold underline underline-offset-4 decoration-4  "
      : "font-bold underline-offset-4 decoration-4 "
  }`;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick}>
      <span className={linkStyles}>{children}</span>
    </Link>
  );
};

export default ActiveLink;
