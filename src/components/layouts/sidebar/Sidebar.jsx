import React from "react";
import { mainMenu } from "../../../config/Config";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { X, Apple, Smartphone, CircleHelp } from "lucide-react";

const Sidebar = ({ collapsed, isMobile, setIsMobile }) => {
  const isMinimize = !collapsed;

  return (
    <>
      {/* Mobile Background */}
      {isMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/10 min-[1280px]:hidden"
          onClick={() => setIsMobile(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-3 top-3 z-50
          flex h-[calc(100dvh-24px)] min-h-0 flex-col
          overflow-x-hidden overflow-y-auto
          overscroll-y-contain touch-pan-y
          min-[1280px]:overflow-y-hidden
          rounded-2xl 
          border-0
          bg-gray-100/85 backdrop-blur-xl
          px-2 pt-6
          shadow-none
          transition-all duration-500 ease-in-out
          will-change-transform
          min-[1280px]:sticky min-[1280px]:top-3
          min-[1280px]:z-20 min-[1280px]:ml-3
          min-[1280px]:mt-3
          min-[1280px]:h-[calc(100dvh-24px)]
          min-[1280px]:shrink-0
          ${
            isMobile
              ? "w-60 translate-x-0"
              : isMinimize
                ? "w-52 -translate-x-[120%] min-[1280px]:translate-x-0"
                : "w-16 -translate-x-[120%] min-[1280px]:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="relative h-9 w-full shrink-0">
          <Link
            to="/signin"
            className="absolute left-0 top-1 flex
              -translate-y-3 items-center gap-1
              translate-x-2 sm:translate-x-6"
            title="MyPatientHUB - Sign In"
          >
            <img
              src="/logo.png"
              alt="MyPatientHUB Logo"
              className="h-7 w-7 shrink-0 object-contain"
            />

            {(isMobile || isMinimize) && (
              <span className="whitespace-nowrap text-[14px] font-semibold text-gray-800">
                MyPatientHUB
              </span>
            )}
          </Link>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={() => setIsMobile(false)}
            className="absolute right-0 top-0 flex h-8 w-8 -mt-5
              shrink-0 items-center justify-center
              text-gray-600 transition-colors
              min-[1280px]:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Divider */}
        <hr
          className="my-2 h-px w-full shrink-0 border-0
            bg-linear-to-r from-transparent
            via-[#344767]/25 to-transparent"
        />

        {/* Navigation */}
        <nav
          className={`mt-1 flex w-full min-w-0 shrink-0 flex-col gap-0 ${
            isMobile || isMinimize
              ? "items-stretch px-1"
              : "items-center px-0"
          }`}
        >
          {mainMenu.map((item, index) => (
            <MenuItem
              key={item.path ?? index}
              path={item.path}
              collapsed={isMobile || isMinimize}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </nav>

        {/* Download App Card */}
        {(isMobile || isMinimize) && (
          <div className="mt-auto w-47 shrink-0 pt-2 pb-20 ml-3">
            <div
              className="h-38 overflow-hidden rounded-lg
                border border-white/20
                bg-linear-to-br from-[#CB0C9F]/95
                via-[#D946B5]/95 to-[#9B2CBA]/95
                p-2 text-white shadow-md"
            >
              <div
                className="mb-1 flex h-7 w-7 items-center
                  justify-center rounded-md bg-white text-[#CB0C9F]"
              >
                <CircleHelp size={22} />
              </div>

              <h3 className="text-[15px] text-start font-bold pt-3">
                Download
              </h3>

              <p className="mt-0.5 text-[13px] text-start font-bold leading-3.5">
                MyPHUB Mobile App
              </p>

              <div className="mt-4 flex w-36 justify-start gap-2">
                <button
                  type="button"
                  aria-label="Apple app"
                  className="flex h-7 min-w-0 flex-1 items-center
                    justify-center rounded-md bg-white
                    text-[#CB0C9F] transition-transform
                    duration-200 hover:scale-[1.03]"
                >
                  <Apple size={13} />
                </button>

                <button
                  type="button"
                  aria-label="Android app"
                  className="flex h-7 min-w-0 flex-1 items-center
                    justify-center rounded-md bg-white
                    text-[#CB0C9F] transition-transform
                    duration-200 hover:scale-[1.03]"
                >
                  <Smartphone size={13} />
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;