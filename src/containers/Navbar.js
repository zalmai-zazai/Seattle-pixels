import Link from "next/link";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import Navlinks from "./Navlinks";
import { useEffect, useState } from "react";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full flex justify-center shadow-lg bg-base-100">
        <div className="navbar py-2 bg-base-100 max-w-6xl">
          <div className="navbar-start">
            <Link href="/">
              <span className="font-bold text-xl">
                <img
                  className="mask inline-block w-52 sm:w-72"
                  src="/logo.png"
                  alt="Seattle Pixels"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center shadow-lg bg-base-100 transition-colors duration-300">
      <div className="navbar py-2 bg-base-100 max-w-6xl transition-colors duration-300">
        <div className="navbar-start">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <Bars3Icon className="h-5 inline-block w-5" />
            </label>
          </div>

          <div className="md:flex-1 flex-none">
            <Link href="/">
              <span className="font-bold text-xl">
                <Image
                  src="/logo.png"
                  alt="Seattle Pixels"
                  width={288} // Matches your w-72 (72 * 4 = 288)
                  height={80} // Adjust based on your logo aspect ratio
                  className="mask inline-block w-52 sm:w-72 transition-opacity duration-300 dark:invert dark:brightness-0 dark:hue-rotate-180"
                  priority={true} // Important for logo in navbar
                  sizes="(max-width: 640px) 208px, 288px"
                />
              </span>
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>

        <div className="navbar-end">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle hover:bg-base-200 transition-all duration-300"
            aria-label={`Switch to ${
              theme === "seattle-light" ? "dark" : "light"
            } mode`}
            title={`Switch to ${
              theme === "seattle-light" ? "dark" : "light"
            } mode`}
          >
            {theme === "seattle-light" ? (
              <MoonIcon className="h-5 w-5 text-base-content" />
            ) : (
              <SunIcon className="h-5 w-5 text-base-content" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
