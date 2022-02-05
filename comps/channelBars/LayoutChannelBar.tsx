import ChannelBarTitle from "./ChannelBarTitle";

interface props {
  channelContent: JSX.Element
  title: string
}

const LayoutChannelBar = ({channelContent, title}: props) => {
  return (
    <div className="h-full w-1/4 bg-gray-800">
      <ChannelBarTitle title={title}/>
      {channelContent}
    </div>
  )
}

export default LayoutChannelBar
