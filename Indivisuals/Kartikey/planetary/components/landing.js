import Image from "next/image";
import stars from "../public/stars.jpg";
import cosmic from "../public/cosmic.gif"
import { useRouter } from "next/router";
export default function Landing() {
    const router = useRouter();
    const goToCosmic = () => {
        router.push('/cosmic')
    }
    const goToAsteroid = () => {
      router.push('/asteroid')
  }
  const goToWildFire = () => {
    router.push('/wildfire')
}
  return (
    <div className=" bg-[url('../public/stars.jpg')] h-full pt-16 w-full relative bg-contain">
      <div className="flex flex-col">
        <div className="flex">

      <div className="flex flex-col">
      <h1 className="text-white mx-2 z-20 w-full xl:mx-10 xl:text-7xl text-2xl font-semibold font-Lato">
        {" "}
        Welcome to our space exploration website!
      </h1>
        <h2 className="text-white mx-2 mt-4 z-20 xl:mx-10 xl:mt-8  xl:w-[900px] xl:text-5xl text-xl font-Lato ">
          We are excited to offer you an immersive and educational experience
          that allows you to explore the wonders of space from the comfort of
          your own device.{" "}
        </h2>
        
      <h2 className="text-white z-20 mx-2 mt-4 xl:mx-10 xl:mt-8  xl:w-[900px] xl:text-5xl text-xl font-Lato ">
        We offer <b> unique features </b> that will take you on a journey
        through the cosmos like never before.
      </h2>
      </div>
      <div className="flex flex-col">

      <model-viewer
          disable-zoom
          camera-controls
          auto-rotate
          src="/Planets.glb"
          ></model-viewer>
          </div>
          </div>
      <div className="mt-10  bg-[url('../public/stars.jpg')] bg-cover flex">
        <div className="flex flex-col">
      <h1 className="text-white  mx-2 z-20 w-full xl:mx-10 xl:text-7xl text-2xl font-semibold font-Lato">
        {" "}
        Cosmic Incarnation
      </h1>
      <h2 className="text-white mx-2 mt-4 z-20 xl:mx-10 xl:mt-8  xl:w-[900px] xl:text-5xl text-xl font-Lato ">
      This feature is designed to offer users a unique experience by showcasing images of astronomical events and objects that occurred on the day of their birth.<br/> 
        </h2>
        <h2 className="text-white mx-2 mt-4 z-20 xl:mx-10 xl:mt-8  xl:w-[900px] xl:text-5xl text-xl font-Lato ">With the vast and breathtaking imagery available through NASA's API, users can explore the wonders of the universe and appreciate the marvels of space in a whole new way.{" "}</h2>
        <h2 className="text-white mx-2 mt-4 z-20 xl:mx-10 xl:mt-8  xl:w-[900px] xl:text-5xl text-xl font-Lato "> So, buckle up and get ready to embark on a cosmic journey through time and space with our exciting feature!</h2>
        </div>
        <div className="flex flex-col justify-evenly ml-10">
            <button onClick={goToCosmic}  className="text-white hover:scale-105 px-5 py-2 bg-teal-500 bg-opacity-50 rounded-full xl:text-4xl border-2 xl:mr-96">Check it Out!</button>
            <Image className="rounded-3xl" src={cosmic}></Image>
        </div>
      </div>
      <div className=" pt-52  bg-[url('../public/stars.jpg')] bg-cover flex">
        <div className="flex flex-col">
      <h1 className="text-white  mx-2 z-20 w-full xl:mx-10 xl:text-7xl text-2xl font-semibold font-Lato">
        {" "}
        Asteroid Proximity Monitor
      </h1>
      <h2 className="text-white mx-2 mt-4 z-20 xl:mx-10 xl:mt-8  xl:w-[900px] xl:text-5xl text-xl font-Lato ">
      Allows you to stay up-to-date on the latest asteroids approaching Earth! Our unique tool generates a comprehensive list of asteroids so you can easily keep track of any potential threats.<br/> 
        </h2>
        <h2 className="text-white mx-2 mb-5 mt-4 z-20 xl:mx-10 xl:mt-8   xl:w-[900px] xl:text-5xl text-xl font-Lato "> Whether you're an astronomy enthusiast or just want to stay informed, our asteroid tracker is the perfect tool for staying up-to-date on space hazards.</h2>
        </div>
        <div className="flex flex-col justify-evenly ml-10">
          <button onClick={goToAsteroid}  className="text-white hover:scale-105 self-center px-5 py-2 bg-teal-500 bg-opacity-50 rounded-full xl:text-4xl border-2 xl:mr-96">Check it Out!</button>
        <model-viewer
          disable-zoom
          camera-controls
          auto-rotate
          src="/Asteroid.glb"
          ></model-viewer>
        </div>
      </div>
      <div className=" pt-52 pb-32  bg-[url('../public/stars.jpg')] bg-cover flex">
        <div className="flex flex-col">
      <h1 className="text-white  mx-2 z-20 w-full xl:mx-10 xl:text-7xl text-2xl font-semibold font-Lato">
        {" "}
        WildFire Prediction 
      </h1>
      <h2 className="text-white mx-2 mt-4 z-20 xl:mx-10 xl:mt-8  xl:w-[900px] xl:text-5xl text-xl font-Lato ">
      The system is built on top of deep learning algorithms and uses convolutional neural networks (CNNs) to detect and classify fire images from satellite data. The model is trained on a large dataset of satellite images, which helps it to learn patterns and identify fires accurately.<br/> 
        </h2>
        <h2 className="text-white mx-2 mb-5 mt-4 z-20 xl:mx-10 xl:mt-8   xl:w-[900px] xl:text-5xl text-xl font-Lato "> This AI-based system has the potential to revolutionize the way we detect and respond to forest fires, as it can monitor vast areas of forests that are not easily accessible and can provide warnings that help prevent the damage caused by fires.</h2>
        </div>
        <div className="flex flex-col justify-evenly ml-10">
          <button onClick={goToWildFire}  className="text-white hover:scale-105 self-center px-5 py-2 bg-teal-500 bg-opacity-50 rounded-full xl:text-4xl border-2 xl:mr-96">Check it Out!</button>
          <model-viewer
          disable-zoom
          camera-controls
          auto-rotate
          src="/Campfire.glb"
          ></model-viewer>
        </div>
      </div>
    </div>
    </div>
  );
}
