import Link from "next/link";

const Menu = () => {
  return (
    <>
      <ul className="list-none flex md:flex-row flex-col gap-10 md:gap-0 md:space-x-8 font-medium">
        <li className="hover:text-[#13B0F5] transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-[#13B0F5] transition-all">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-[#13B0F5] transition-all">
          <Link href="/services">Tech Stack</Link>
        </li>
        <li className="hover:text-[#13B0F5] transition-all">
          <Link href="/portfolio">Projects</Link>
        </li>
        <li className="hover:text-[#13B0F5] transition-all">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
