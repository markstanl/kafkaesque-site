import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Nanum_Brush_Script} from 'next/font/google'

const nanum = Nanum_Brush_Script({
    subsets: ['latin'],
    weight: ['400']
})

const Navbar = () => {
    return (
        <nav className={'w-full flex flex-col items-center bg-white text-black'}>
            <ul className={`${nanum.className} text-3xl w-3/5 flex flex-row justify-between items-center`}>
                <li><Link href={'/'}><Image src={'/logo.png'} alt={'Beetle Logo'} width={50} height={50}/></Link></li>
                <li><Link href={'/about'}>About</Link></li>
                {/*<li><Link href={'/classifier'}>Classifier</Link></li>*/}
                <li><Link href={'/rank'}>Rank</Link> </li>
            </ul>
        </nav>
    )
}
export default Navbar
