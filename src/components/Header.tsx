import { Link } from "react-router-dom";

import { links } from "@/constants";

const Header = () => {
  return (
    <header className="bg-indigo-600 mb-10 *:text-white px-5 md:px-[150px] py-5 flex justify-between items-center">
      <h1 className="text-4xl">World News</h1>

      <nav>
        <ul className="flex items-center gap-6 *:text-xl *:font-bold">
          {links.map(({ name, path }) => (
            <li key={name}>
              <Link key={path} to={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
