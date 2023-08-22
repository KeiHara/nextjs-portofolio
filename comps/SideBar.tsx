import React, { createElement, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { BiUserCircle } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface SideBarIcon {
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
  }, [router.asPath]);

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
      className={`fixed z-50 m-0 flex w-20 flex-col bg-neutral-200 py-2 shadow-lg transition-all duration-300 ease-in-out  dark:bg-zinc-800 dark:text-neutral-200 text-neutral-800  sm:top-2/4 sm:h-[500px] sm:max-h-[80%] sm:-translate-y-2/4  sm:rounded-2xl ${
        !isOnLeft
          ? "sm:left-[calc((100%-384px)/2+384px+40px)] lg:left-[calc((100%-672px)/2+672px+40px)]"
          : "sm:left-[calc((100%-384px)/2-130px)] lg:left-[calc((100%-672px)/2-130px)]"
      }`}
    >
      <Link href="/">
        <a draggable={false}>
          <SideBarIcon
            icon={() => <BiUserCircle size={28} />}
            text="About me"
            toggled={toggledSideBarIcon[0]}
            isDark={isDark}
          />
        </a>
      </Link>
      <hr className="mx-5 rounded-full border border-gray-100 bg-gray-100 dark:border-zinc-700 dark:bg-zinc-700" />
      <Link href="/works">
        <a draggable={false}>
          <SideBarIcon
            icon={() => <MdWorkOutline size={28} />}
            toggled={toggledSideBarIcon[1]}
            text="My works"
            isDark={isDark}
          />
        </a>
      </Link>
      <a
        href="https://github.com/KeiHara/nextjs-portofolio"
        target="_blank"
        rel="noreferrer"
      >
        <SideBarIcon
          icon={() => <FaGithub size={28} />}
          toggled={toggledSideBarIcon[3]}
          text="Source"
          isDark={isDark}
        />
      </a>
      <motion.div
        whileHover={["hover", isDark ? "darkHighlight" : "lightHighlight"]}
        animate={["initial", isDark ? "dark" : "light"]}
        className="group relative mt-auto cursor-pointer py-2"
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
              backgroundColor: "rgb(245 245 245)"
            }
          }}
          transition={{
            scale: { type: "spring", bounce: 0.75 },
            borderRadius: { type: "spring", bounce: 0.75 }
          }}
          className="mx-auto flex h-12 w-12 items-center justify-center shadow-md"
        >
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
          className={`absolute top-1/2 w-1 origin-left -translate-y-1/2 rounded-r-full`}
        ></motion.div>
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
          className="flex min-w-max items-center rounded-md bg-neutral-100 p-2 text-sm font-bold shadow-md dark:bg-zinc-800"
        >
          <div className="absolute left-0 inline-block w-2 -translate-x-full overflow-hidden">
            <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-100 dark:bg-zinc-800"></div>
          </div>
          {isOnLeft ? "Move to right" : "Move to left"}
        </motion.span>
      </motion.div>

      {/* theme button */}
      <motion.div
        whileHover={["hover", isDark ? "darkHighlight" : "lightHighlight"]}
        animate={["initial", isDark ? "dark" : "light"]}
        whileTap={"tap"}
        className="group relative cursor-pointer py-2"
        onClick={() => toggleTheme()}
      >
        <motion.div
          initial={false}
          variants={{
            initial: {
              scale: 1,
              borderRadius: 24
            },
            tap: {
              scale: 0.9
            },
            hover: {
              scale: 1.1,
              borderRadius: 12
            },
            dark: {
              backgroundColor: "rgb(168 85 247)"
            },
            light: {
              backgroundColor: "rgb(251 146 60)"
            },
            darkHighlight: {
              backgroundColor: "rgb(147 51 234)"
            },
            lightHighlight: {
              backgroundColor: "rgb(249 115 22)"
            }
          }}
          transition={{
            scale: { type: "spring", bounce: 0.75 },
            borderRadius: { type: "spring", bounce: 0.75 }
          }}
          className="mx-auto flex h-12 w-12 justify-center overflow-hidden shadow-md"
        >
          <motion.div
            className="flex h-[180%] flex-col justify-evenly"
            variants={{
              dark: {
                rotateZ: 180,
                transition: { duration: 0.75, type: "spring" }
              },
              light: {
                rotateZ: 0,
                transition: { duration: 0.75, type: "spring" }
              }
            }}
          >
            <FaSun size={28} />
            <FaMoon className="rotate-180" size={28} />
          </motion.div>
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
          className={`absolute top-1/2 w-1 origin-left -translate-y-1/2 rounded-r-full`}
        ></motion.div>
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
          className="flex min-w-max items-center rounded-md bg-neutral-100 p-2 text-sm font-bold shadow-md dark:bg-zinc-800"
        >
          <div className="absolute left-0 inline-block w-2 -translate-x-full overflow-hidden">
            <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-100 dark:bg-zinc-800"></div>
          </div>
          Change theme
        </motion.span>
      </motion.div>
    </div>
  );
};

const SideBarIcon = ({
                       icon,
                       toggled,
                       isDark,
                       text = "tooltip 😀"
                     }: SideBarIcon) => {
  return (
    <motion.div
      whileHover={[
        !toggled ? "hover" : "",
        isDark ? "darkHighlight" : "lightHighlight"
      ]}
      animate={
        toggled
          ? ["toggled", isDark ? "darkHighlight" : "lightHighlight"]
          : ["unToggled", isDark ? "dark" : "light"]
      }
      className="group relative py-2"
    >
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
            backgroundColor: "rgb(245 245 245)"
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
        className={`mx-auto flex h-12 w-12 items-center justify-center shadow-md`}
      >
        {createElement(icon)}
      </motion.div>
      <motion.div
        variants={{
          toggled: {
            height: "2rem"
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
        className={`absolute top-1/2 w-1 origin-left -translate-y-1/2 rounded-r-full bg-sky-300 dark:bg-teal-300`}
      ></motion.div>
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
        className="flex min-w-max items-center rounded-md bg-neutral-100 p-2 text-sm font-bold shadow-md dark:bg-zinc-800"
      >
        <div className="absolute left-0 inline-block w-2 -translate-x-full overflow-hidden">
          <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-100 dark:bg-zinc-800"></div>
        </div>
        {text}
      </motion.span>
    </motion.div>
  );
};

export default SideBar;
