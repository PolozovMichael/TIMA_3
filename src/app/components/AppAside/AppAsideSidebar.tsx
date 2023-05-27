import { NavLink, useLocation } from "react-router-dom";

import { sidebarItems } from "../../data/sidebarItems";

const AppAsideSidebar = () => {
  const { pathname } = useLocation();

  function isActiveIcon(
    path: string,
    primaryIcon: string,
    secondaryIcon: string,
  ) {
    return pathname === path ? primaryIcon : secondaryIcon;
  }

  function isActiveItem({ isActive }) {
    return isActive ? "sidebar__item sidebar__item--active" : "sidebar__item";
  }

  return (
    <div className="sidebar">
      {sidebarItems.map(({
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
          <div className="sidebar_icon-wrapper">
            <img
              className="sidebar__icon"
              src={isActiveIcon(path, primaryIcon, secondaryIcon)}
              alt="sidebar item icon"
            />
          </div>
          <p className="sidebar__title">
            {title}
          </p>
        </NavLink>
      ))}
    </div>
  );
}

export default AppAsideSidebar;
