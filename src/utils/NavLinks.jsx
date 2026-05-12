import Link from "next/link";

const NavLinks = ({ pathUrl, children }) => {
  return (
    <li className="hover:text-[#0EA5E9]">
      <Link href={`${pathUrl}`}>{children}</Link>
    </li>
  );
};

export default NavLinks;
