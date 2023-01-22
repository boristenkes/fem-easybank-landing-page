import React from 'react'

import { Button } from '../../components';
import { images, bg } from '../../assets';

const Header = () => {
  return (
    <header className='container even-columns relative md:!flex-row !flex-col-reverse'>  
      <div>
        <h1 className="headtext">
          Next generation<br />digital banking
        </h1>

        <p className="body-text">
          Take your financial life online. Your Easybank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.
        </p>
        
        <Button href='#' className='md:mx-0 mx-auto'>Request Invite</Button>
      </div>

      <div>
        <img className='w-screen aspect-square object-contain -translate-y-[100px] -z-10 relative' src={images.mockups} alt="Preview of app" />
        <picture>
          <source 
            media='(min-width: 768px)'
            srcSet={bg.intro.desktop}
          />
          <img className='absolute md:-top-[41%] top-0 md:-right-[25%] right-0 -z-20 w-[1000px] aspect-square object-contain' src={bg.intro.mobile} alt="" />
        </picture>
      </div>
    </header>
  )
}

export default Header
