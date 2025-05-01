import Lottie from "lottie-react";
import coffee from '../assets/CoffeeLoader.json'
const Loader = () => (
    <div className="w-full h-full bg-white absolute">
  <div className="flex h-full w-full items-center justify-center ">
    <Lottie animationData={coffee} loop={true} />
  </div>
  </div>
);

export default Loader