import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobilSidebar = () => {
    setIsMobile((previous) => !previous);
  };

  const toggleSidebar = () => {
    setCollapsed((previous) => !previous);
  };

  return (
    <div className="flex min-h-screen w-full overflow-x-clip bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />

      <main className="min-w-0 flex-1 bg-gray-100 p-3 sm:p-4 md:p-6">
        <Header
          toggleSidebar={toggleSidebar}
          toggleMobilSidebar={toggleMobilSidebar}
        />

        {children}
      </main>
    </div>
  );
};

export default Layout;