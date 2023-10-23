import Link from "next/link";
import React from "react";

export default function Header() {
  const nav: { title: string; url: string }[] = [
    { title: "Store Design Templates", url: "#demos" },
    { title: "Get Started Now!", url: "/pricing" },
    { title: "Login", url: "https://dashboard.ishop.black/login" },
    { title: "ishop.black", url: "https://www.ishop.black" },
    { title: "Support", url: "#" },
    { title: "Pricing", url: "/pricing" },
  ];

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src="/img/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
          </a>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {nav.map((navItem) => {
                return (
                  <li key={navItem.title}>
                    <Link
                      href={navItem.url}
                      className="block py-2 pr-4 pl-3 text-gray-800 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                      aria-current="page"
                    >
                      {navItem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
