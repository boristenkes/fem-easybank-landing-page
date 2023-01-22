import React, { useState } from 'react'

import { Logo, Button } from '../../components';
import { navLinks } from '../../constants';
import { useMediaQuery } from 'react-responsive';
import { Spin as Hamburger } from 'hamburger-react'

const Nav = ({ className }) => (
  <nav>
    <ul className={className}>
      {navLinks.map((navLink, index) => (
        <li className='py-7 border-b-4 border-b-transparent transition-border-b duration-500 hover:border-b-[var(--clr-primary-400)] fw-regular hover:text-neutral-500 nav-item hover:' key={`nav-link-${index + 1}`}>
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
    <section className='shadow-nav z-100 bg-neutral-100'>
      <div className='nav-wrapper container flex justify-between items-center font-nav'>
        <a href="#">
          <Logo />
        </a>

        {isDesktop
          ? <Nav className='flex z-[1] gap-10 text-neutral-500' />
          : <Nav className={`flex z-[1] flex-col text-center fixed top-[15%] right-1/2 translate-x-1/2 p-10 rounded-lg 
                           bg-neutral-200 shadow-nav-mobile transition-transform duration-500 ${!isOpen && '-translate-y-[200%]'}
                             w-[min(500px,_90%)] mx-auto gap-6 text-xl text-neutral-500`} />}

        {isDesktop
          ? <Button href='#'>Request Invite</Button>
          : <Hamburger label='Show menu' distance='sm' duration={.5} size={25} direction='right' toggled={isOpen} toggle={setOpen} />
          }
      </div>
    </section>
  )
}

export default Navbar
