import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { moreLinks } from './links'

export default function MorePage() {
  return (
    <div className="">
      <div className="w-full text-white uppercase flex justify-center items-center p-4 bg-[#394048] relative">
        <Link href="/accounts" className="absolute left-[20px]">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <span className="text-white text-lg font-semibold">More</span>
      </div>
      <div className="mt-5">
        <p className='px-5 text-base font-semibold'>Useful Links</p>

        <div className='w-full mt-5 bg-white h-screen'>
          {moreLinks.map((link, i) => (
            <Link key={i} href={link.slug} className='flex items-center text-base font-semibold gap-2 text-[#2f5e80] p-4 px-5 border-b border-gray-400'>
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
