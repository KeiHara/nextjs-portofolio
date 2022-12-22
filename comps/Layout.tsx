import SideBar from './SideBar';
import TopNav from './TopNav';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import VoxelDogLoader from './voxel-dog-loader';
import BottomNav from "./BottomNav";
interface props {
  children: JSX.Element;
}

const LazyVoxelDog = dynamic(() => import('./voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Layout = ({ children }: props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener('resize', () => {
      window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
    });
  });

  return (
    <div>
      {isMobile ? (
        <div></div>
      ) : (
        <SideBar />
        )}

      <div className="bg-neutral-300 dark:bg-zinc-900 w-full flex flex-col">
        <div className="flex flex-col">
          {!isMobile ? (
              <TopNav />
          ) : ( <div></div> )}
          <div className="scrollbar overflow-auto sm:pt-[4.5rem] sm:h-screen h-[calc(100vh-4.5rem)]">
            <div className="mt-16 flex justify-center">
              <LazyVoxelDog />
            </div>
            <div className="relative">{children}</div>
          </div>
          {isMobile ? (
              <BottomNav />
          ): ( <div></div> )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
