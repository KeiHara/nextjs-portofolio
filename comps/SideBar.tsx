import React, { createElement, useEffect, useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { BiUserCircle } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SideBarIconProps {
  icon: IconType;
  toggled?: boolean;
  text?: string;
}

const SideBar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, []);

  useEffect(() => {
    window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener('resize', () => {
      window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
    });
  });

  const toggleTheme = (): void => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };
  const [toggledSideBarIcon, setToggledSideBarIcon] = useState([
    true,
    false,
    false,
    false,
  ]);

  const [onLeft, setOnRight] = useState(true);

  const router = useRouter();
  useEffect(() => {
    switch (router.asPath) {
      case '/':
        setToggledSideBarIcon([true, false, false, false]);
        break;
      case '/works':
        setToggledSideBarIcon([false, true, false, false]);
        break;
    }
  }, [router.pathname]);

  return (
    <div
      className={`fixed z-50 m-0 flex h-full w-20 flex-col  bg-neutral-200 py-2 shadow-lg transition-all duration-300 ease-in-out  dark:bg-zinc-800 dark:text-white  sm:top-2/4 sm:h-[400px] sm:-translate-y-2/4  sm:rounded-2xl ${
        !onLeft
          ? 'sm:left-[calc((100%-384px)/2+384px+40px)] lg:left-[calc((100%-672px)/2+672px+40px)]'
          : 'sm:left-[calc((100%-384px)/2-130px)] lg:left-[calc((100%-672px)/2-130px)]'
      }`}>
      <Link href="/">
        <a>
          <SideBarIcon
            icon={(props) => <BiUserCircle size={28} />}
            text="About me"
            toggled={toggledSideBarIcon[0]}
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
          />
        </a>
      </Link>
      <a href="https://github.com/KeiHara/nextjs-portofolio" target="_blank">
        <SideBarIcon
          icon={(props) => <FaGithub size={28} />}
          toggled={toggledSideBarIcon[2]}
          text="Source"
        />
      </a>

      <div
        onClick={() => setOnRight(!onLeft)}
        className=" group relative mx-auto mt-auto mb-2 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-3xl shadow-md duration-200 ease-linear hover:rounded-xl  sm:flex">
        <div className="absolute left-[-16px] h-2 w-1 origin-left scale-0 rounded-r-full  bg-black duration-300 group-hover:h-5 group-hover:scale-100 dark:bg-white"></div>
        {onLeft ? <FaArrowRight size={28} /> : <FaArrowLeft size={28} />}
        <span className="absolute left-14 m-4 flex min-w-max origin-left scale-0 items-center rounded-md bg-neutral-200 p-2 text-sm font-bold shadow-md duration-100 group-hover:scale-100 dark:bg-zinc-800">
          <div className="absolute left-[-4px] inline-block w-2 overflow-hidden">
            <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-200 dark:bg-zinc-800"></div>
          </div>
          {onLeft ? 'Move to right' : 'Move to left'}
        </span>
      </div>

      <div
        onClick={() => toggleTheme()}
        className={`group relative mx-auto mb-2 mt-auto flex  h-12 w-12 cursor-pointer items-center justify-center rounded-3xl shadow-md duration-200 ease-linear hover:rounded-xl sm:mt-2 ${
          isDark
            ? 'bg-purple-500 hover:bg-purple-600'
            : 'bg-orange-400 hover:bg-orange-500'
        } `}>
        <div className="absolute left-[-16px] h-2 w-1 origin-left scale-0 rounded-r-full  bg-black duration-300 group-hover:h-5 group-hover:scale-100 dark:bg-white"></div>
        {isDark ? <FaMoon size={28} /> : <FaSun size={28} />}

        <span className="absolute left-14 m-4 flex min-w-max origin-left scale-0 items-center rounded-md bg-neutral-200 p-2 text-sm font-bold shadow-md duration-100 group-hover:scale-100 dark:bg-zinc-800">
          <div className="absolute left-[-4px] inline-block w-2 overflow-hidden">
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
  text = 'tooltip 😀',
}: SideBarIconProps) => {
  return (
    <div
      className={`${
        toggled && 'rounded-xl bg-sky-300 dark:bg-teal-300'
      } group relative mx-auto mt-2 mb-2 flex h-12 w-12 items-center justify-center rounded-3xl shadow-md duration-200 ease-linear hover:rounded-xl hover:bg-sky-300 dark:bg-zinc-700 hover:dark:bg-teal-300`}>
      <div
        className={`${
          toggled && 'left-[-16px] h-5 scale-100'
        } absolute left-[-16px] h-2 w-1 origin-left scale-0 rounded-r-full bg-sky-300 duration-300 group-hover:h-5 group-hover:scale-100 dark:bg-teal-300`}></div>
      {createElement(icon)}
      <span className="absolute left-14 m-4 flex min-w-max origin-left scale-0 items-center rounded-md bg-neutral-200 p-2 text-sm font-bold shadow-md duration-100 group-hover:scale-100 dark:bg-zinc-800">
        <div className="absolute left-[-7px] inline-block w-2 overflow-hidden">
          <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-200 dark:bg-zinc-800"></div>
        </div>
        {text}
      </span>
    </div>
  );
};

export default SideBar;
