import Navbar from "@/components/navbar"
import { useState } from "react";
import Image from "next/image";
import bgimg from "@/public/stars.jpg";
const axios = require('axios');
export default function Cosmic(){  
    const [imgurl,setImgurl] = useState('')
    const [title,setTitle] = useState('')
    const [explain,setExplain] = useState('')
    const [date,setDate] = useState('');
    const apiKey = 'HGgzNs8K2j8VrmMgNshhbbf4w1QYkKTUng0oBA5v';
        async function giveDOB(){
            try{
                const response = await axios.get(
                    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${date}&end_date=${date}`

                );
                    console.log(response.data)
                    setImgurl(response.data[0].hdurl)
                    setExplain(response.data[0].explanation)
                    setTitle(response.data[0].title)

            }
            catch(error){
                console.log(error)
            }

        }
    
     const handleChange = (e)=>{
        setDate(e.target.value);
     }
    return(
<div className="h-screen bg-[bgimg] bg-contain ">
    <Navbar/>
    <div className=" flex flex-col w-screen">
    <div className="flex justify-center mt-5">
    <input className="xl:px-5 h-20 rounded-3xl mx-1 text-xl xl:mx-5 xl:text-5xl" type="date" onChange={handleChange}></input>
    <button onClick={giveDOB} className="h-20 hover:scale-105 bg-slate-100 text-gray mx-1 xl:mx-5 border-2 font-semibold border-black rounded-3xl text-xl xl:text-3xl px-5 py-2" >Submit Date</button>
    </div>
        <div className="flex bg-black rounded-3xl border-4 mt-10 self-center border-white xl:w-[1280px] xl:h-[650px] w-[300px] h-[600px]">
        <div className="flex p-5">
        <Image className="rounded-3xl" width={800} height={300} src={imgurl}></Image>
        </div>
        <div className="flex items-center flex-col w-[400px]">
        <h1 className="text-4xl font-semibold font-Orbitron text-white">{title}</h1>
        <h2 className="font-Lato text-white">{explain}</h2>
        </div>
        </div>
          </div>
</div>
    )
}