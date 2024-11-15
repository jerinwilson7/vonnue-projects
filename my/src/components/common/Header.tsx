import React from 'react'
import menuIcon from '../../assets/svg/Vector.svg'
import hubbopossLogo from '../../assets/svg/headerIcons/hubbopos-logo-white.svg'
import Image from 'next/image'
import Button from './Button'

const Header = () => {
  return (
    <div className='bg-hubbo-yellow-500 w-screen py-10.5'>
        <div className='text-red-500'>
           <Image src={menuIcon} alt='menu'/>
           <Image src={hubbopossLogo} alt='logo'/>
        </div>
    </div>
  )
}

export default Header