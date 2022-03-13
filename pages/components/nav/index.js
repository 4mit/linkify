import React from "react";
import { navConfig } from "./config";

const Nav = () => {
  return (
    <nav>
      <div>
        {navConfig.map((n, i) => {
          return (
            <a
              key={i}
              class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
              href="/"
            >
              <span class="text-left">{n.icon}</span>
              <span class="mx-4 text-sm font-normal">{n.title}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
