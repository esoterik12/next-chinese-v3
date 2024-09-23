import Link from "next/link";
import Image from "next/image";
import IconOctahedron from "../icons/IconOctahedron";

const Logo = async () => {
  return (
    <div className="my-2 ml-2">
      <Link
        href="/"
        className="flex flex-row items-center gap-1 text-xl font-bold tracking-wide"
      >
        <div className="w-5 max-h-5">
          <IconOctahedron classes="w-5 w-5" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
