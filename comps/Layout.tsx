import SideBar from './SideBar';
import Model from './Model';
interface props {
  children: JSX.Element;
}

const Layout = ({ children }: props) => {
  return (
    <div className="flex bg-neutral-300 dark:bg-zinc-900">
      <SideBar />
      <div className="w-full">
        <div className="flex justify-center">
          <Model />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
