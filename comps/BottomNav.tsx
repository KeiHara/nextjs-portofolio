import { useRouter } from 'next/router';
import { createElement, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BiUserCircle } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

interface SideBarIconProps {
  icon: IconType;
  toggled: boolean;
  isDark: boolean;
  text?: string;
}

const BottomNav = () => {
  const [isDark, setIsDark] = useState(false);

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
  }, [router.asPath]);

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
    return () => {};
  }, [isDark]);

  return (
    <div
      className="flex z-10 bottom-0 rounded-t-3xl h-[4.5rem] w-full items-center justify-evenly bg-neutral-200/50 shadow-sm backdrop-blur-md dark:bg-zinc-800/50 dark:text-white
        ">
      <Link href="/">
        <a className="h-full">
          <SideBarIcon
            icon={() => <BiUserCircle size={28} />}
            text="About me"
            toggled={toggledSideBarIcon[0]}
            isDark={isDark}
          />
        </a>
      </Link>
      <Link href="/works">
        <a className="h-full">
          <SideBarIcon
            icon={() => <MdWorkOutline size={28} />}
            toggled={toggledSideBarIcon[1]}
            text="My works"
            isDark={isDark}
          />
        </a>
      </Link>
      <a
        className="h-full"
        href="https://github.com/KeiHara/nextjs-portofolio"
        target="_blank"
        rel="noreferrer">
        <SideBarIcon
          icon={() => <FaGithub size={28} />}
          toggled={toggledSideBarIcon[3]}
          text="Source"
          isDark={isDark}
        />
      </a>

      {/* theme button */}
      <motion.div
        whileHover={['hover', isDark ? 'darkHighlight' : 'lightHighlight']}
        animate={['initial', isDark ? 'dark' : 'light']}
        whileTap={'tap'}
        className="group relative cursor-pointer h-full flex items-center"
        onClick={() => toggleTheme()}>
        <motion.div
          initial={false}
          variants={{
            initial: {
              scale: 1,
              borderRadius: 24,
            },
            tap: {
              scale: 0.9,
            },
            hover: {
              scale: 1.1,
              borderRadius: 12,
            },
            dark: {
              backgroundColor: 'rgb(168 85 247)',
            },
            light: {
              backgroundColor: 'rgb(251 146 60)',
            },
            darkHighlight: {
              backgroundColor: 'rgb(147 51 234)',
            },
            lightHighlight: {
              backgroundColor: 'rgb(249 115 22)',
            },
          }}
          transition={{
            scale: { type: 'spring', bounce: 0.75 },
            borderRadius: { type: 'spring', bounce: 0.75 },
          }}
          className="flex h-12 w-12 justify-center overflow-hidden shadow-md">
          <motion.div
            className="flex h-[180%] flex-col justify-evenly"
            variants={{
              dark: {
                rotateZ: 180,
              },
            }}>
            <FaSun size={28} />
            <FaMoon className="rotate-180" size={28} />
          </motion.div>
        </motion.div>
        <motion.div
          variants={{
            hover: {
              height: '1.25rem',
            },
            darkHighlight: {
              backgroundColor: 'rgb(255 255 255)',
            },
            lightHighlight: {
              backgroundColor: 'rgb(0 0 0)',
            },
          }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
          className={`absolute top-1/2 w-1 origin-left -translate-y-1/2 rounded-r-full`}></motion.div>
      </motion.div>
    </div>
  );
};

export default BottomNav;

const SideBarIcon = ({
  icon,
  toggled,
  isDark,
  text = 'tooltip 😀',
}: SideBarIconProps) => {
  return (
    <motion.div
      whileHover={[
        !toggled ? 'hover' : '',
        isDark ? 'darkHighlight' : 'lightHighlight',
      ]}
      animate={
        toggled
          ? ['toggled', isDark ? 'darkHighlight' : 'lightHighlight']
          : ['unToggled', isDark ? 'dark' : 'light']
      }
      className="group relative h-full flex items-center">
      <motion.div
        whileTap={{ scale: 0.9 }}
        initial={false}
        variants={{
          toggled: {
            borderRadius: 12,
          },
          unToggled: {
            borderRadius: 24,
          },
          hover: {
            scale: 1.1,
            borderRadius: 12,
          },
          dark: {
            backgroundColor: 'rgb(63 63 70)',
          },
          light: {
            backgroundColor: 'rgb(245 245 245)',
          },
          darkHighlight: {
            backgroundColor: 'rgb(94 234 212)',
          },
          lightHighlight: {
            backgroundColor: 'rgb(125 211 252)',
          },
        }}
        transition={{
          scale: { type: 'spring', bounce: 0.75 },
          borderRadius: { type: 'spring', bounce: 0.75 },
        }}
        className={`flex h-12 w-12 items-center justify-center shadow-md`}>
        {createElement(icon)}
      </motion.div>
      <motion.div
        variants={{
          toggled: {
            width: '2rem',
          },
          unToggled: {
            width: '0rem',
          },
          hover: {
            width: '1.25rem',
          },
        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
        className={`absolute bottom-0 h-1 origin-bottom -translate-x-1/2 left-2/4 rounded-t-full bg-sky-300 dark:bg-teal-300`}></motion.div>
    </motion.div>
  );
};
