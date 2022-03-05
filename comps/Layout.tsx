import SideBar from './SideBar';
import Model from './Model';
import TopNav from './TopNav';
import { useEffect, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Global } from '@emotion/react';
interface props {
  children: JSX.Element;
}

const Layout = ({ children }: props) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.innerWidth < 640 && setIsMobile(true);
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
              <div className="position absolute  h-36 w-2 rounded-md dark:bg-zinc-800"></div>
            </div>
            <SideBar />
          </SwipeableDrawer>
        </div>
      ) : (
        <SideBar />
      )}

      <div className="float-right min-h-screen w-[calc(100vw-16px)] bg-neutral-300 dark:bg-zinc-900 sm:w-[calc(100vw-5rem)]">
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
