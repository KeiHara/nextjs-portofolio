import React from 'react'

interface props {
  title: string
}

const ChannelBarTitle = ({title} : props) => {
  return (
    <div className="w-full h-14 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.25)] flex items-center">
      <h1 className="ml-5 text-white text-3xl">{ title }</h1>
    </div>
  )
}

export default ChannelBarTitle
