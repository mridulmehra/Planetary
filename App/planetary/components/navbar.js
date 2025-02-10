import Image from "next/image"
import earth from "../public/planets/earth.png"
import jupiter from "../public/planets/jupiter.png"
import mars from "../public/planets/mars.png"
import mercury from "../public/planets/mercury.png"
import moon from "../public/planets/moon.png"
import neptune from "../public/planets/neptune.png"
import saturn from "../public/planets/saturn.png"
import venus from "../public/planets/venus.png"
import { use, useState } from "react"



export default function Navbar(){
    const planetarr = [earth,jupiter,mars,mercury,moon,neptune,saturn,venus]
    const [image,setImage] = useState(earth)
    const logo = ()=>{
        let number = Math.floor(Math.random() * 8);
        setImage(planetarr[number])
    }
    return (
        <div className="z-30 top-0 sticky flex justify-between items-center w-screen h-24 bg-black">
            <div onClick={logo} className="select-none cursor-pointer flex mx-5 xl:mx-8 items-center hover:scale-105">
            <Image className="w-10 h-10   xl:w-14 xl:h-14" src={image}></Image>
            <h1 className=" mx-3 xl:mx-5 text-2xl xl:text-5xl font-Orbitron text-white"> Planetary </h1>
            </div>
        </div>
    )
}