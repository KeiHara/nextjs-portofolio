import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TopNav = () => {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setPageTitle("About me");
        break;
      case "/works":
        setPageTitle("My Works");
        break;
    }
  }, [router.pathname]);

  return (
    <div
      className="w-11/12 max-w-sm py-3  lg:max-w-2xl left-1/2 -translate-x-1/2 rounded-2xl top-4 fixed z-10 flex justify-center bg-neutral-200/50 shadow-sm backdrop-blur-sm dark:bg-zinc-800/50 dark:text-white text-neutral-700
  ">
      <div className="w-full max-w-sm lg:max-w-2xl">
        <h1 className="text-4xl font-bold dark:text-white text-neutral-700 text-center">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default TopNav;
