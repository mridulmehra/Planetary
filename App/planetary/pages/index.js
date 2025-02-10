import Image from 'next/image'
import Navbar from '@/components/navbar'
import Landing from '@/components/landing'
export default function HomePage() {
  return (
   <div className='h-screen w-screen bg-black overflow-x-hidden'>
    <Navbar/>
    <Landing/>
   </div>
  )
}
