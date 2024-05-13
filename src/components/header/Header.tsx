import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className='border-b-4 bg-[#d71e28] w-full px-8 py-5 border-b-[#fcc60a]'>
        <Image src="https://i.imgur.com/gaShZcx.png" className='w-[150px] h-[30px]' width={150} height={150} alt='logo' />
    </header>
  )
}
