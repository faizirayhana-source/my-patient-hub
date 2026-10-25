import { Home, LogOut, Menu, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchInput from "../ui/SearchInput";
import Notifications from "../ui/Notifications";
import { Button } from "../ui/button";

const Header = ({ toggleSidebar, toggleMobilSidebar }) => {
  const [isScroll, setIsScroll] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0)};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)};
  }, []);

  return (
    <header
      className={`sticky top-3 z-40
         flex w-full min-w-0 flex-col
         gap-3 rounded-2xl px-3 py-3
         sm:flex-row sm:px-5
         min-[1280px]:flex-nowrap
        ${isScroll ? "bg-gray-100/80 backdrop-blur-[30px]" : ""}`}
    >
      {/* Dashboard */}
      <div className="flex min-w-0 items-center sm:gap-14">
        <div className="min-w-0 text-[14px]">
          <div className="flex translate-x-3 items-center gap-2 whitespace-nowrap text-slate-500">
            <Home size={14}/>
            <span>/</span>
            <span>Dashboard</span>
          </div>

          <h1 className="whitespace-nowrap text-[15px] font-semibold text-slate-900">
            Dashboard
          </h1>
        </div>

        <Button
          variant="ghost"
          className="hidden cursor-pointer text-slate-700 min-[1280px]:flex"
          onClick={toggleSidebar}
          aria-label="Toggle desktop sidebar"
        >
          <Menu size={20} />
        </Button>
      </div>

      {/* Search and Actions */}
      <div
        className="grid w-full min-w-0
          items-center gap-x-5
          min-[375px]:grid-cols-[minmax(0,1fr)_94px]
          min-[425px]:grid-cols-[minmax(0,1fr)_auto]
          sm:flex sm:w-auto sm:flex-1 sm:justify-end sm:gap-3
          min-[1280px]:flex-none"
      >
        {/* Search */}
        <SearchInput />

        {/* Four Icons */}
        <div
          className="col-start-2 row-start-1 row-span-2
            grid grid-cols-2 items-center justify-items-center
            gap-x-3 gap-y-4
            min-[375px]:grid-cols-3
            min-[375px]:grid-rows-2
            min-[375px]:gap-x-3
            min-[425px]:flex
            min-[425px]:flex-nowrap
            min-[425px]:justify-between
            min-[425px]:gap-3
            sm:order-2 sm:flex sm:gap-3
            min-[1024px]:gap-3 min-[1280px]:gap-4"
        >
          {/* Log out */}
          <button
            type="button"
            onClick={() => navigate("/signin")}
            className="flex cursor-pointer items-center justify-center
              gap-1.5 border-0 bg-transparent p-0
              text-slate-900"
            aria-label="Log out"
            title="Log out"
          >
            <LogOut size={17} />
            <span className="hidden min-[768px]:inline whitespace-nowrap text-[13px] font-semibold">
              Log out
            </span>
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={toggleMobilSidebar}
            className="flex cursor-pointer
             items-center justify-center
             border-0 bg-transparent p-0
             text-slate-900 shadow-none
             outline-none focus:outline-none
             focus-visible:outline-none
             min-[1280px]:hidden"
            aria-label="Open mobile sidebar"
            title="Menu"
          >
            <Menu size={18} />
          </button>

          {/* Settings */}
          <button
            type="button"
            className="flex cursor-pointer
             items-center justify-center
             border-0 bg-transparent p-0
             text-slate-900 shadow-none"
            aria-label="Settings"
            title="Settings"
          >
            <Settings size={17} />
          </button>

          {/* Notifications */}
          <Notifications />
        </div>
      </div>
    </header>
  );
};

export default Header;