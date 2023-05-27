import { NavLink, useLocation } from "react-router-dom";

import { navbarItems } from "../../data/navbarItems";

interface navLinkProps {
  isActive: boolean;
}

const Navbar = () => {
  const { pathname } = useLocation();

  function isActiveIcon(
    path: string,
    primaryIcon: string,
    secondaryIcon: string,
  ) {
    return pathname === path ? primaryIcon : secondaryIcon;
  }

  function isActiveItem({ isActive }: navLinkProps) {
    return isActive ? "navbar__item navbar__item--active" : "navbar__item";
  }

  return (
    <div className="navbar">
      {navbarItems.map(({
        title,
        path,
        primaryIcon,
        secondaryIcon,
      }) => (
        <NavLink
          key={path}
          className={isActiveItem}
          to={path}
        >
          <div className="navbar_icon-wrapper">
            <img
              className="navbar__icon"
              src={isActiveIcon(path, primaryIcon, secondaryIcon)}
              alt="navbar item icon"
            />
          </div>
          <p className="navbar__title">
            {title}
          </p>
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
