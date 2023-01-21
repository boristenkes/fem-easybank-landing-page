import React from 'react'

import './Navbar.scss';
import { Logo, Button } from '../../components';
import { navLinks } from '../../constants';

const Navbar = () => {
  return (
    <section className='container flex justify-space-between items-center font-nav'>
      <Logo />

      // TODO: add styles.js

      <ul>
        {navLinks.map((navLink, index) => (
          <li key={`navLink-${index+1}`}>
            <a href={navLink.link}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      <Button>Request Invite</Button>
    </section>
  )
}

export default Navbar
