import { ChevronDown, CircleHelp, Mail, Menu, MessageCircleMore, Search, ShoppingBasket, SquareUser, Truck, User } from 'lucide-react'
import React, { Fragment } from 'react'
import Topbar from './Topbar'
import InputWithIcon from '../ui/input-with-icon'
import Image from 'next/image'

const Navbar = () => {
  return (
    <Fragment>
      <Topbar />
      <nav className='w-full h-20 bg-white border-b border-muted-foreground'>
        <div className='container h-full flex items-center gap-10 mx-auto px-5 lg:px-0'>
          <h1 className='text-2xl lg:text-4xl font-bold'>Drukland.de</h1>
          <ul className='h-full items-center gap-4 hidden lg:flex'>
            <li className='flex items-center gap-1'>
              <p>Business</p>
              <ChevronDown size={20} absoluteStrokeWidth strokeWidth={1.25} />
            </li>
            <li className='flex items-center gap-1'>
              <p>Products</p>
              <ChevronDown size={20} absoluteStrokeWidth strokeWidth={1.25} />
            </li>
            <li>About us</li>
          </ul>
          <div className='w-[25%] 2xl:w-[45%] hidden lg:block'>
            <InputWithIcon placeholder='Search' icon={<Search size={20} absoluteStrokeWidth strokeWidth={1.25} className='text-muted-foreground' />} />
          </div>
          <div className='items-center gap-4 hidden lg:flex'>
            <Image src='/truck.svg' width={25} height={25} alt='Truck' />
            <Image src='/user.svg' width={25} height={25} alt='User' />
            <Image src='/basket.svg' width={25} height={25} alt='Basket' />
          </div>
          <Menu size={30} absoluteStrokeWidth strokeWidth={1.5} className='ml-auto lg:hidden' />
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
