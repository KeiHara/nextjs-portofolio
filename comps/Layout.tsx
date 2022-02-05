import SideBar from "./SideBar";

interface props {
  children: JSX.Element
}

const Layout = ({children}: props) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default Layout
