import { NextPage } from "next";
import AboutChannelBar from "../../comps/channelBars/AboutChannelBar";
import LayoutChannelBar from "../../comps/channelBars/LayoutChannelBar";


const index: NextPage = () => {
  return (
    <div className="w-full h-full">
      <LayoutChannelBar title="About me" channelContent={ <AboutChannelBar /> } />
    </div>
  )
}

export default index
