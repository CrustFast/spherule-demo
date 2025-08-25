'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/explore', label: 'Explore' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navBackground, setNavBackground] = useState('transparent');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (!heroSection) return;
      const heroHeight = heroSection.offsetHeight;
      const scrollY = window.scrollY;

      setIsSticky(scrollY > 50);

      if (scrollY > 50 && scrollY < heroHeight) {
        setNavBackground('glassmorphism');
      } else if (scrollY >= heroHeight) {
        setNavBackground('solid');
      } else {
        setNavBackground('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const glassmorphismClass = 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg';
  const solidBlackClass = 'bg-black shadow-lg';
  const transparentClass = 'bg-transparent';

  return (
    <>
      <div
        className={`
          ${isSticky ? 'fixed' : 'absolute'}
          top-0 left-0 w-full z-50 flex justify-center transition-all duration-300
        `}
      >
        <nav
          className={`
            flex items-center justify-between
            w-full lg:min-w-[1100px] lg:w-auto
            gap-x-12 px-4 sm:px-6
            transition-all duration-300
            ${isSticky ? 'rounded-full mt-4 py-2 lg:py-3' : 'py-3 pt-5'}
            ${
              navBackground === 'glassmorphism' ? glassmorphismClass :
              navBackground === 'solid' ? solidBlackClass :
              transparentClass
            }
          `}
        >
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="Spherule Logo"
              width={isSticky ? 80 : 100} 
              height={isSticky ? 80 : 100}
              className="transition-all duration-300"
            />
          </Link>

          <div className="hidden lg:flex items-center flex-grow justify-center">
            <ul className="flex items-center space-x-8 text-white font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="relative transition-colors duration-300 after:content-[''] after:absolute after:-bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-[2px] after:bg-white after:rounded-full after:transform after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-white font-medium">
            <button className="hover:text-gray-300 transition-colors">
              Login
            </button>
            <button className="bg-white text-black py-2 px-5 rounded-full hover:bg-gray-200 transition-colors font-semibold">
              Register
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <IoMenu size={36} />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`
          fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 backdrop-blur-sm z-50
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-5">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <IoClose size={44} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16">
          <ul className="flex flex-col items-center space-y-8 text-white text-2xl font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={toggleMenu}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center space-y-6 text-white font-medium mt-12 w-full px-8">
            <button className="w-full py-3 text-2xl">
              Login
            </button>
            <button className="w-full bg-white text-black py-3 rounded-full text-xl font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;