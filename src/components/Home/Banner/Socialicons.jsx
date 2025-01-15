import Link from "next/link";

// icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

export default function Socialicons() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Link
          href={"https://github.com/AfrideHossain"} target="_blank"
          className="text-white text-2xl"
        >
          <FaGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/afridehossain/"} target="_blank"
          className="text-white text-2xl"
        >
          <FaLinkedin />
        </Link>
        <Link
          href={"https://www.facebook.com/afrede.hossain1/"} target="_blank"
          className="text-white text-2xl"
        >
          <FaFacebook />
        </Link>
      </div>
    </>
  );
}
