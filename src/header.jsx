import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='h-[80px] bg-slate-900 flex items-center justify-between px-10 text-white w-full'>
       <Link to={"/"}><img src="/img.png" alt='logo' className='h-[50px]'/></Link> 
      <div className=' gap-3 items-center justify-around w-[60%] xl:w-[30%] hidden sm:flex'>
        <Link to={"/"}>Home</Link>
        <p>TV Program</p>
        <p>Films</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Header