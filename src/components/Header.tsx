import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import Image from "../assets/imane.jpg"
import Background from "../assets/bg.jpg"
type Props = {}

const Header = (props: Props) => {
    return (
        <header className='bg-slate-900 flex items-center justify-center gap-3 flex-col py-5 relative'>
            <img src={Background} alt="background" className='absolute top-0 left-0 h-full w-full -z-0 opacity-10' />
            <div className="w-1/4 m-auto rounded-full ">
                <img src={Image} alt="avatar" className='w-fit rounded-full ' />
            </div>
            <div className='text-center'>
                <h1 className='text-zinc-200 text-2xl font-bold'>John Doe</h1>
                <p className='text-zinc-400'>Lorem ipsum</p>
            </div>
        </header>
    )
}

export default Header