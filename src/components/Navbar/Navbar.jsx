import React, { useState } from 'react'

import './Navbar.scss';
import { Logo, Button } from '../../components';
import { navLinks } from '../../constants';
import { useMediaQuery } from 'react-responsive';
import { Spin as Hamburger } from 'hamburger-react'
import { stack as Menu } from 'react-burger-menu';

const Nav = ({ className }) => (
  <nav>
    <ul className={className}>
      {navLinks.map((navLink, index) => (
        <li className='fw-regular hover:text-neutral-500 nav-item' key={`navLink-${index + 1}`}>
          <a href={navLink.link}>{navLink.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

const Navbar = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const [isOpen, setOpen] = useState(false);

  return (
    <section className='shadow-nav z-100 py-5'>
      <div className='nav-wrapper container flex justify-between items-center font-nav'>
        <Logo />

        {isDesktop
          ? <Nav className='flex z-[1] gap-10 text-neutral-400' />
          : <Nav className={`flex z-[1] flex-col fixed top-0 right-0 p-20 bg-neutral-200 drop-shadow-xl 
                             transition-transform duration-500 ${!isOpen && 'translate-x-[100%]'} 
                             h-[100vh] gap-10 text-neutral-400 before:content-none before:absolute before:inset-0 before:bg-primary-500`}/>}

        {isDesktop
          ? <Button>Request Invite</Button>
          : <Hamburger label='Show menu' distance='sm' duration={.5} size={25} direction='right' toggled={isOpen} toggle={setOpen} />
          }
      </div>
    </section>
  )
}

export default Navbar
