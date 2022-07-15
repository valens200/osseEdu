import React, { useState } from 'react'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';


const NavBar = () => {

  const [showList, setShowList] = useState(false);

  return (
    <div className='h-24 w-full bg-navBarColor flex justify-center items-center gap-[20rem] '>
      <a href='/' className='hover:cursor-pointer'>
        <span className='text-white uppercase text-2xl font-black'>osee</span>
        <span className='text-white uppercase text-3xl font-black'>EDU</span>
      </a>

      <div className='w-fit p-2 '>
        <ul className='p-8 flex gap-4 '>
          <li className='decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2 ease-in'>Home</li>
          <li className='decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>Courses</li>
          <li className='decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>Apply now</li>
          <div className='listItem transition-all duration-500' onMouseEnter={()=>setShowList(true)} onMouseLeave={()=>setShowList(false)} >
             <li className=' decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>Science<KeyboardArrowDownSharpIcon fontSize='2' /></li>
             <div className='subContent w-20 h-5 absolute bg-white transition-all duration-500' style={{display: showList ? '' : 'none'}}>

             </div>
          </div>

          <div>
             <li className='decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>Technology <KeyboardArrowDownSharpIcon fontSize='2' /></li>
          </div>

          <div>
             <li className='decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>Engineering <KeyboardArrowDownSharpIcon fontSize='2' /></li>
          </div>

          <div>
             <li className='decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>Maths <KeyboardArrowDownSharpIcon fontSize='2' /></li>
          </div>
          <li className='decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>Contact Us</li>

        </ul>
      </div>
    </div>
  )
}

export default NavBar
