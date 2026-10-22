import { NavLink } from "react-router-dom";

const MenuItem = ({ title, icon: Icon, collapsed, path }) => {
  return (
    <NavLink
      to={path}
      end={path === "/dashboard"}
      title={!collapsed ? title : undefined}
      className={({ isActive }) =>
        `group relative flex h-12 w-full min-w-0 items-center ml-3
        overflow-hidden rounded-md px-2
        transition-colors duration-200 ease-in-out
        ${
          isActive
            ? "bg-white text-[#344767] shadow-sm mb- w-[calc(100%-0.75rem)]"
            : "bg-transparent text-slate-500"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className="flex h-8 w-8 min-w-8 shrink-0
            items-center justify-center rounded-md
            transition-colors duration-300"
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center
              justify-center rounded-md transition-colors duration-300
              ${
                isActive
                  ? "bg-[#CB0C9F] shadow-none"
                  : "bg-white shadow-md"
              }`}
            >
              <Icon
                size={17}
                strokeWidth={2}
                className={
                  isActive ? "text-white" : "text-[#344767]"
                }
              />
            </span>
          </span>

          <span
            className={`ml-3 min-w-0 overflow-hidden whitespace-nowrap
            text-xs transition-all duration-200
            ${
              collapsed
                ? "max-w-40 opacity-100"
                : "ml-0 max-w-0 opacity-0"
            }
            ${
              isActive
                ? "font-semibold text-[#344767]"
                : "font-normal text-slate-500"
            }`}
          >
            {title}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default MenuItem;