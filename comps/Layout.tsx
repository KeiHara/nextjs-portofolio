import SideBar from './SideBar';
import Model from './Model';
import TopNav from './TopNav';
import { useState } from 'react';
import { useRouter } from 'next/router';
interface props {
  children: JSX.Element;
}

const Layout = ({ children }: props) => {
  return (
    <div>
      <SideBar />
      <div className="float-right min-h-screen w-[calc(100vw-5rem)] bg-neutral-300 dark:bg-zinc-900">
        <TopNav />
        <div className="flex justify-center">
          <Model />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
