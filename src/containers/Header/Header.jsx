import React from 'react'

import { Button } from '../../components';
import { images, bg } from '../../assets';
import './Header.scss';

const Header = () => {
  return (
    <header className='container even-columns md:!flex-row !flex-col-reverse'>
      
      <div>
        <h1 className="headtext">
          Next generation<br />digital banking
        </h1>
        
        <p className="body-text">
          Take your financial life online. Your Easybank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.
        </p>
        
        <Button className='md:mx-0 mx-auto'>Request Invite</Button>
      </div>

      <div className='relative'>
        <img src={images.mockups} alt="" />
        <img className='absolute top-0 right-0 z-[-1] w-full h-full' src={bg.intro.mobile} alt="" />
      </div>
    </header>
  )
}

export default Header
