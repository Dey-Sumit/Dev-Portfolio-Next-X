import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
        {/* // do this div style later (after putting the content) */}
        <div className="h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-black-500 shadow-custom-light dark:shadow-custom-dark">
          {/* //!sidebar */}
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl dark:bg-black-500 dark:text-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark">
          {/* //!navbar */}
          <Navbar />
          {/* //!about */}
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
