
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Option from './Option'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
      <ul className='flex flex-row gap-5 items-center'>
        <Link to={'/'}>
            <img src="https://png.pngtree.com/png-vector/20190226/ourlarge/pngtree-rocket-logo-design-png-image_719413.jpg" alt="rocket" className='w-14 h-14 rounded-full' />
        </Link>
        <Link to={'/products'}>
          <Option>Products</Option>
        </Link>
        <Link to={'/categories'}>
          <Option>Categories</Option>
        </Link>
      </ul>
      <ul className='flex flex-row gap-5 items-center'>
        <Option>Login</Option>
        <Option>Signup</Option>
        <Option><AiOutlineShoppingCart/></Option>
      </ul>
    </header>
  )
}

export default Header
