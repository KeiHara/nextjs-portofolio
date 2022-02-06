import { NextPage } from 'next';
import React, { createElement, useEffect, useState } from 'react';
import { FaFire } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { BiUserCircle } from 'react-icons/bi';
import Link from 'next/link';

interface SideBarIconProps {
  icon: IconType;
  text?: string;
}

const SideBar: NextPage = () => {
  const [isDark, setIsDark] = useState(false);
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

    console.log(localStorage.theme);
  }, []);

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

  return (
    <div className="sticky top-0 left-0 m-0 flex h-screen w-20 flex-col bg-neutral-200 py-2 shadow-lg dark:bg-zinc-800 dark:text-white">
      <Link href="/">
        <a>
          <SideBarIcon
            icon={(props) => <BiUserCircle size={28} />}
            text="about me 😊"
          />
        </a>
      </Link>
      <hr className="mx-5 rounded-full border border-gray-100 bg-gray-100 dark:border-zinc-700 dark:bg-zinc-700" />
      <Link href="/about">
        <a>
          <SideBarIcon icon={(props) => <FaFire size={28} />} />
        </a>
      </Link>
      <SideBarIcon icon={(props) => <FaFire size={28} />} />
      <SideBarIcon icon={(props) => <FaFire size={28} />} />
      <div
        onClick={() => toggleTheme()}
        className={`group relative mx-auto mt-auto mb-2 flex h-12 w-12 items-center justify-center rounded-3xl shadow-md duration-200 ease-linear  hover:rounded-xl ${
          isDark
            ? 'bg-purple-500 hover:bg-purple-600'
            : 'bg-orange-400 hover:bg-orange-500'
        } `}>
        <div className="fixed left-[-4px] h-2 w-2 origin-left scale-0 rounded-full duration-300 group-hover:h-5 group-hover:scale-100 dark:bg-white"></div>
        <FaFire size={28} />
        <span className="absolute left-14 m-4 flex min-w-max origin-left scale-0 items-center rounded-md bg-neutral-200 p-2 text-sm font-bold shadow-md duration-100 group-hover:scale-100 dark:bg-zinc-800">
          <div className="absolute left-[-7px] inline-block w-2 overflow-hidden">
            <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-200 dark:bg-zinc-800"></div>
          </div>
          change theme
        </span>
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 😀' }: SideBarIconProps) => (
  <div className="group relative mx-auto mt-2 mb-2 flex h-12 w-12 items-center justify-center rounded-3xl bg-neutral-100 shadow-md duration-200 ease-linear  hover:rounded-xl hover:bg-sky-300 dark:bg-zinc-700 hover:dark:bg-teal-300">
    <div className="fixed left-[-4px] h-2 w-2 origin-left scale-0 rounded-full bg-sky-300 duration-300 group-hover:h-5 group-hover:scale-100 dark:bg-teal-300"></div>
    {createElement(icon)}
    <span className="absolute left-14 m-4 flex min-w-max origin-left scale-0 items-center rounded-md bg-neutral-200 p-2 text-sm font-bold shadow-md duration-100 group-hover:scale-100 dark:bg-zinc-800">
      <div className="absolute left-[-7px] inline-block w-2 overflow-hidden">
        <div className="h-3 origin-top-right -rotate-45 transform bg-neutral-200 dark:bg-zinc-800"></div>
      </div>
      {text}
    </span>
  </div>
);

export default SideBar;
