import React, {useState, useEffect } from 'react'
import {ThreeLazy, Nav, Head} from '../components'
import {Footer} from './sections'
import {ScrollDir} from '../hooks';

export default function Layout({ children, isDark, setTheme }) {
  
  const scrollDirection = ScrollDir('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="relative">
      <Head/>
      <Nav isDark = {isDark} setTheme = {setTheme} scrolledToTop = {scrolledToTop} scrollDirection = {scrollDirection} />
      {children}
      <Footer/>

      <div id="background" className="fixed block w-[100vw] h-[100vh] top-0 left-0 z-[-200] bg-black"></div>

      <div className="fixed block w-[100vw] h-[100vh] top-0 left-0 z-[-100]">
          <ThreeLazy isDark = {isDark} />
      </div>
    </main>
  )
}