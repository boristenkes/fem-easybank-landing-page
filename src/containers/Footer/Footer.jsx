import React from 'react'

import { Logo, Button } from '../../components';
import { socialIcons, footerLinks } from '../../constants';

const Footer = () => {
  return (
    <footer className='bg-neutral-500 py-10 mt-20'>
      
      <div className="footer-wrapper w-full flex md:flex-row flex-col items-center md:items-stretch justify-between container">
        <div className='flex justify-between flex-col'>
          <a href="/" className='mx-auto md:mx-0'>
            <Logo fill='var(--clr-neutral-100)' />
          </a>

          <ul className='flex gap-3 my-8 md:my-0'>
            {socialIcons.map((icon, index) => (
              <li className='text-neutral-100 text-3xl md:text-xl hover:!text-primary-300' key={`social-${index+1}`}>
                <a href={icon.link}>
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex w-96 justify-between flex-col md:flex-row gap-3 md:gap-0 text-center md:text-left mb-10 md:mb-0'>
            {footerLinks.map((list, index) => (
              <ul className='flex flex-col gap-3' key={`footer-list-${index+1}`}>
                {list.links.map((link, index) => (
                  <li className='text-neutral-100 hover:!text-primary-300' key={`footer-link-${index+1}`}>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ))}
        </div>

        <div className='flex flex-col gap-8 md:gap-0 items-center md:items-end justify-between'>
          <Button>Request Invite</Button>

          <p className='text-neutral-400 fw-regular'>&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
