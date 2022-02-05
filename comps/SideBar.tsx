import { NextPage } from 'next';
import React, { createElement } from 'react';
import { FaFire } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { BiUserCircle } from 'react-icons/bi';
import Link from 'next/link';
import styles from './SideBar.module.scss';

interface Props {
  icon: IconType;
  text?: string;
}

const SideBar: NextPage = () => {
  return (
    <div className="top-0 left-0 h-screen m-0 flex flex-col bg-zinc-800 text-white shadow-lg w-20 sticky">
      <Link href="/">
        <a>
          <SideBarIcon
            icon={(props) => <BiUserCircle size={28} />}
            text="about me 😊"
          />
        </a>
      </Link>
      <hr className={styles.hr} />
      <Link href="/about">
        <a>
          <SideBarIcon icon={(props) => <FaFire size={28} />} />
        </a>
      </Link>
      <SideBarIcon icon={(props) => <FaFire size={28} />} />
      <SideBarIcon icon={(props) => <FaFire size={28} />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 😀' }: Props) => (
  <div className={`${styles.icon} group`}>
    <div
      className={`${styles.state} group-hover:scale-100 group-hover:h-5`}
    ></div>
    {createElement(icon)}
    <span className={`${styles.tooltip} group-hover:scale-100`}>
      <div className={styles.triangle}>
        <div></div>
      </div>
      {text}
    </span>
  </div>
);

export default SideBar;
