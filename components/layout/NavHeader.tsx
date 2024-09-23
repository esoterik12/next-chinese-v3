import Logo from "./Logo";
import NavLink from "./NavLink";

export default async function NavHeader() {
  return (
    <header className="z-20 h-14">
      <nav className="flex flex-row items-center justify-between">
        {/* Logo - Left Side */}
        <div className="flex w-1/4 flex-row">
          <Logo />
        </div>

        {/* NavLinks */}
        <div className="hidden flex-row justify-center sm:block md:flex mr-4">
          <ul className="flex gap-x-5 sm:text-md">
            <li>
              <NavLink href="/problems">Problems</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
