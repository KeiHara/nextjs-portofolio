import React, { createElement, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { BiUserCircle } from "react-icons/bi";
import { MdMusicNote, MdWorkOutline } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, Transition, Variants } from "framer-motion";

interface SideBarIconProps {
  icon: IconType;
  toggled: boolean;
  isDark: boolean;
  text?: string;
}

const SideBar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = (): void => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };
  const [toggledSideBarIcon, setToggledSideBarIcon] = useState([
    true,
    false,
    false,
    false
  ]);

  const [isOnLeft, setIsOnLeft] = useState(true);

  const router = useRouter();
  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setToggledSideBarIcon([true, false, false, false]);
        break;
      case "/works":
        setToggledSideBarIcon([false, true, false, false]);
        break;
    }
  }, [router.pathname]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
    return () => {
    };
  }, [isDark]);

  return (
    <div
      className={`fixed z-50 m-0 flex h-full w-20 flex-col bg-neutral-200 py-2 shadow-lg transition-all duration-300 ease-in-out  dark:bg-zinc-800 dark:text-white  sm:top-2/4 sm:h-[500px] sm:max-h-[80%] sm:-translate-y-2/4  sm:rounded-2xl ${
        !isOnLeft
          ? "sm:left-[calc((100%-384px)/2+384px+40px)] lg:left-[calc((100%-672px)/2+672px+40px)]"
          : "sm:left-[calc((100%-384px)/2-130px)] lg:left-[calc((100%-672px)/2-130px)]"
      }`}>
      <Link href="/">
        <a>
          <SideBarIcon
            icon={(props) => <BiUserCircle size={28} />}
            text="About me"
            toggled={toggledSideBarIcon[0]}
            isDark={isDark}
          />
        </a>
      </Link>
      <hr className="mx-5 rounded-full border border-gray-100 bg-gray-100 dark:border-zinc-700 dark:bg-zinc-700" />
      <Link href="/works">
        <a>
          <SideBarIcon
            icon={(props) => <MdWorkOutline size={28} />}
            toggled={toggledSideBarIcon[1]}
            text="My works"
            isDark={isDark}
          />
        </a>
      </Link>
      <Link href="/music">
        <a>
          <SideBarIcon
            icon={(props) => <MdMusicNote size={28} />}
            toggled={toggledSideBarIcon[2]}
            text="My music"
            isDark={isDark}

          />
        </a>
      </Link>
      <a href="https://github.com/KeiHara/nextjs-portofolio" target="_blank">
        <SideBarIcon
          icon={(props) => <FaGithub size={28} />}
          toggled={toggledSideBarIcon[3]}
          text="Source"
          isDark={isDark}
        />
      </a>
      <motion.div whileHover={["hover", isDark ? "darkHighlight" : "lightHighlight"]}
                  animate={["initial", isDark ? "dark" : "light"]}
                  className="group relative mt-auto py-2 cursor-pointer"
                  onClick={() => setIsOnLeft(!isOnLeft)}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={false}
          variants={{
            initial: {
              scale: 1,
              borderRadius: 24
            },
            hover: {
              scale: 1.1,
              borderRadius: 12
            },
            dark: {
              backgroundColor: "rgb(63 63 70)"
            },
            light: {
              backgroundColor: "rgb(229 229 229)"
            }
          }}
          transition={{
            scale: { type: "spring", bounce: 0.75 },
            borderRadius: { type: "spring", bounce: 0.75 }
          }}

          className="flex mx-auto h-12 w-12 items-center justify-center shadow-md">
          {isOnLeft ? <FaArrowRight size={28} /> : <FaArrowLeft size={28} />}
        </motion.div>
        <motion.div
          variants={{
            hover: {
              height: "1.25rem"
            },
            darkHighlight: {
              backgroundColor: "rgb(255 255 255)"
            },
            lightHighlight: {
              backgroundColor: "rgb(0 0 0)"
            }
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut"
          }}
          className={`absolute top-1/2 w-1 -translate-y-1/2 origin-left rounded-r-full`}></motion.div>
        <motion.span
          variants={{
            hover: {
              scale: 1
            }
          }}
          style={{
            originX: 0,
            scale: 0,
            position: "absolute",
            top: "50%",
            translateY: "-50%",
            left: "120%"
          }}
          className="flex min-w-max items-center rounded-md bg-neutral-200 p-2 text-sm font-bold shadow-md dark:bg-zinc-800">
          <div className="absolute left-0 -translate-x-full inline-block w-2 overflow-hidden">
            <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-200 dark:bg-zinc-800"></div>
          </div>
          {isOnLeft ? "Move to right" : "Move to left"}
        </ motion.span>
      </motion.div>

      <div
        onClick={() => toggleTheme()}
        className={`group relative mx-auto mb-2 mt-auto flex  h-12 w-12 cursor-pointer items-center justify-center rounded-3xl shadow-md duration-200 ease-linear hover:rounded-xl sm:mt-2 ${
          isDark
            ? "bg-purple-500 hover:bg-purple-600"
            : "bg-orange-400 hover:bg-orange-500"
        } `}>
        <div
          className="absolute left-[-16px] h-2 w-1 origin-left scale-0 rounded-r-full  bg-black duration-300 group-hover:h-5 group-hover:scale-100 dark:bg-white"></div>
        {isDark ? <FaMoon size={28} /> : <FaSun size={28} />}

        <span
          className="absolute left-14 m-4 flex min-w-max origin-left scale-0 items-center rounded-md bg-neutral-200 p-2 text-sm font-bold shadow-md duration-100 group-hover:scale-100 dark:bg-zinc-800">
          <div className="absolute left-[-7px] inline-block w-2 overflow-hidden">
            <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-200 dark:bg-zinc-800"></div>
          </div>
          change theme
        </span>
      </div>
    </div>
  );
};

const SideBarIcon = ({
                       icon,
                       toggled,
                       isDark,
                       text = "tooltip 😀"
                     }: SideBarIconProps) => {
  return (
    <motion.div whileHover={["hover", isDark ? "darkHighlight" : "lightHighlight"]}
                animate={toggled ? ["toggled", isDark ? "darkHighlight" : "lightHighlight"] : ["unToggled", isDark ? "dark" : "light"]}
                className="group relative py-2">
      <motion.div
        whileTap={{ scale: 0.9 }}
        initial={false}
        variants={{
          toggled: {
            borderRadius: 12
          },
          unToggled: {
            borderRadius: 24
          },
          hover: {
            scale: 1.1,
            borderRadius: 12
          },
          dark: {
            backgroundColor: "rgb(63 63 70)"
          },
          light: {
            backgroundColor: "rgb(229 229 229)"
          },
          darkHighlight: {
            backgroundColor: "rgb(94 234 212)"
          },
          lightHighlight: {
            backgroundColor: "rgb(125 211 252)"
          }
        }}
        transition={{
          scale: { type: "spring", bounce: 0.75 },
          borderRadius: { type: "spring", bounce: 0.75 }
        }}

        className={`flex mx-auto h-12 w-12 items-center justify-center shadow-md`}>
        {createElement(icon)}
      </motion.div>
      <motion.div
        variants={{
          toggled: {
            height: "1.25rem"
          },
          unToggled: {
            height: "0rem"
          },
          hover: {
            height: "1.25rem"
          }
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
        className={`absolute top-1/2 w-1 -translate-y-1/2 origin-left rounded-r-full bg-sky-300 dark:bg-teal-300`}></motion.div>
      <motion.span
        variants={{
          hover: {
            scale: 1
          }
        }}
        style={{
          originX: 0,
          scale: 0,
          position: "absolute",
          top: "50%",
          translateY: "-50%",
          left: "120%"
        }}
        className="flex min-w-max items-center rounded-md bg-neutral-200 p-2 text-sm font-bold shadow-md dark:bg-zinc-800">
        <div className="absolute left-0 -translate-x-full inline-block w-2 overflow-hidden">
          <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-200 dark:bg-zinc-800"></div>
        </div>
        {text}
      </ motion.span>
    </motion.div>
  );
};

export default SideBar;
