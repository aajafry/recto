import PropTypes from "prop-types";
import { useSidebar } from "../contexts/SidebarContext";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import SideBar from "../organisms/SideBar";

function Layout({ children }) {
  const { isOpen } = useSidebar();
   const { isDark } = useTheme();

   const dynamicStyle = {
     "--scrollbar-track": isDark ? "#374253" : "#eee",
     "--scrollbar-thumb": isDark ? "#202731" : "#e5e7eb",
   };

  return (
    <>
      <SideBar />
      <section
        className={`relative ${
          isOpen ? "left-64 w-[calc(100%-16rem)]" : "left-0 w-full"
        } h-dvh flex flex-col overflow-auto common-transition`}
      >
        <Header />
        <div
          className="main flex-1 px-8 py-2 mt-[52px] secoundary-bg-theme secoundary-text-theme overflow-x-hidden overflow-y-scroll"
          style={dynamicStyle}
        >
          {children}
        </div>
        <Footer />
      </section>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};


export default Layout;
