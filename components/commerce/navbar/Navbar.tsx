// components/commerce/navbar/Navbar.tsx
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavSearch from "./NavSearch";
import NavUser from "./NavUser";
import NavCart from "./NavCart";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-book-light shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <MobileMenu />
            <NavLogo />
            <NavLinks />
          </div>

          <div className="flex items-center gap-4">
            <NavSearch />
            <NavUser />
            <NavCart />
            <ThemeSwitcher/>
          </div>
        </div>
      </div>
    </header>
  );
}
