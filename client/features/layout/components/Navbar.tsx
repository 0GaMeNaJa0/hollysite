"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sun, Bell, Menu, X } from "lucide-react";
import { NAV_LINKS, ACTION_BUTTONS, HIDDEN_PATHS } from "@/features/layout/constants/menu";


const Logo = () => (
  <Link href="/">
    <div className="navbar-start w-fit flex items-center">
      <img
        src="/icons/simplydev.png"
        alt="simple_dev_icon"
        className="mr-2 w-9 h-9"
      />
      <h2 className="font-semibold text-primary">SimplyDev</h2>
    </div>
  </Link>
);

const UserAvatar = ({ size = "md:w-11 lg:w-13" }: { size?: string }) => (
  <Link href="/profile">
    <div className="avatar">
      <div className={`${size} rounded-full`}>
        <img
          src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
          alt="User profile"
        />
      </div>
    </div>
  </Link>
);

const DesktopMenu = () => (
  <div className="navbar justify-end md:gap-x-6 lg:gap-x-8 flex flex-1 max-md:hidden">
    <div className="navbar-start">
      <Logo />
    </div>
    <ul className="navbar-center gap-x-5">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-primary font-semibold">{link.label}</Link>
        </li>
      ))}
    </ul>

    <ul className="navbar-end gap-x-7">
      <li>
        <Sun color="#4A7766" />
      </li>
      <li>
        <Bell color="#4A7766" />
      </li>
      <li>
        <UserAvatar />
      </li>
    </ul>
  </div>
);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
  <div
    className={`fixed w-full z-40 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "top-[85px] opacity-100 max-h-96" : "top-0 opacity-0 max-h-0"
      }`}
  >
    <div className="p-6">
      <ul className="mx-auto text-center gap-4 space-y-4 w-fit">
        <li>
          <UserAvatar size="w-11 max-md:w-8" />
        </li>

        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={onClose}>
              {link.label}
            </Link>
          </li>
        ))}

        {ACTION_BUTTONS.map((button) => (
          <li key={button.href}>
            <Link href={button.href} onClick={onClose}>
              <Button>{button.label}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shouldShowNavbar = !HIDDEN_PATHS.includes(pathname);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  if (!shouldShowNavbar) return null;

  return (
    <nav className={`mt-[85px]`}>
      <div
        className={`navbar bg-base-100 shadow-sm px-[50px] max-lg:px-[15px] h-[85px] fixed top-0 z-50 w-full max-md:justify-between`}
      >

        <DesktopMenu />

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="hidden max-md:block"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </nav>
  );
}