import SideBar from './SideBar';
import TopNav from './TopNav';
import { useEffect, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Global } from '@emotion/react';
import dynamic from 'next/dynamic';
import VoxelDogLoader from './voxel-dog-loader';
interface props {
  children: JSX.Element;
}

const LazyVoxelDog = dynamic(() => import('./voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Layout = ({ children }: props) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener('resize', () => {
      window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
    });
  });

  return (
    <div>
      {isMobile ? (
        <div>
          <Global
            styles={{
              '.MuiDrawer-root > .MuiPaper-root': {
                width: `80px`,
                overflow: 'visible',
              },
            }}
          />
          <SwipeableDrawer
            onOpen={toggleDrawer()}
            onClose={toggleDrawer()}
            disableSwipeToOpen={false}
            anchor="left"
            swipeAreaWidth={16}
            ModalProps={{
              keepMounted: true,
            }}
            open={open}>
            <div className="visible absolute right-[-16px] flex h-full w-[16px] items-center justify-center bg-neutral-300 shadow-lg dark:bg-zinc-900">
              <div className="position absolute h-36 w-2 rounded-md bg-neutral-400 dark:bg-zinc-800"></div>
            </div>
            <SideBar />
          </SwipeableDrawer>
        </div>
      ) : (
        <SideBar />
      )}

      <div className="float-right w-[calc(100%-16px)]  bg-neutral-300 dark:bg-zinc-900 sm:w-full">
        <div className="scrollbar h-screen overflow-auto sm:ml-[80px]">
          <TopNav />
          <div className="mt-16 flex justify-center">
            <LazyVoxelDog />
          </div>
          <div className="relative">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
