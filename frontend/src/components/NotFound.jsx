import React from 'react'
import Lottie from "lottie-react";
import notfound from '../assets/notfound.json'


const NotFound = () => {
  return (
    <div className="w-full h-full">
    <div className="flex h-full w-full items-center justify-center ">
      <Lottie animationData={notfound} loop={true} />
    </div>
    </div>
  )
}

export default NotFound