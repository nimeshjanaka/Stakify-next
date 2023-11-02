import React from 'react'
import Link from 'next/link'
import CardComponent from '../components/CardComponent'
 import Image from 'next/image'


const HomePage = () => {
    

  return (
    <div>
      <div class="grid grid-cols-5 gap-0.5">
      <div class="bg-[#171821] h-screen text-justify">
        
            <Image className='mt-10 ml-10'
            src="/asset/profile.png"
            width={150}
            height={100}
            alt="profile"
          />
        <div class="flex justify-center text-justify p-2">

    <ul>
      <li className='bg-blue-500/80 boarder rounded mt-7 mb-5 text-white text-center  w-52 h-10'>
        <Link href="/dashboard">dashboard</Link>
      </li>
      <li className='bg-blue-500/80 boarder rounded mb-5 text-white text-center w-52 h-10'>
        <Link href="/account">account</Link>
      </li>
      <li className='bg-blue-500/80 boarder rounded mb-5 text-white text-center w-52 h-10'>
        <Link href="/calculator">calculator</Link>
      </li>
      <li className='bg-blue-500/80 boarder rounded mb-5 text-white text-center w-52 h-10'>
        <Link href="/refferal">refferal</Link>
      </li>
    </ul>
        </div>
      </div>

      
      <div class="col-span-4 bg-[#171821] h-screen ">
      <div>
        <div className='bg-[#21222d] boarder rounded mt-7 mb-5 text-white text-end w-75 h-15 ml-6 mr-6 '>
            <button className='bg-blue-500/80 boarder rounded mt-5 mb-5 text-white text-center h-8 mr-4  w-20  '>Connect</button>
        </div>
      <div className="flex  p-2 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 gap-4 w-full ml-5 mr-5 mt-5  text-white ">
          <div>
            <CardComponent />
          </div>
          <div>
            <CardComponent />
          </div>
          <div>
            <CardComponent />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2 bg-[#171821]">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 gap-4 w-full mt-1 ml-5 mr-5">
          <div>
            <CardComponent />
          </div>
          <div>
            <CardComponent />
          </div>
          
          <div>
            <CardComponent />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 gap-4 w-full mt-1 ml-5 mr-5 h-40">
          <div>
            <CardComponent />
          </div>
          <div>
            <CardComponent />
          </div>
          <div>
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
    </div>
  )
}

export default HomePage



