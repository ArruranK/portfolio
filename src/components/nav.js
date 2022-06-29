import React, { useState, useEffect } from 'react';
import {navLinks} from '../config';
import { Link } from 'gatsby';


export default function Nav({isDark, setTheme, scrolledToTop, scrollDirection}) {

  const isBrowser = typeof window !== "undefined"; 

  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  const [navOpen, setNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (isBrowser) {
        setWidth(window.innerWidth)
      }
      
    }
    if (isBrowser) {
      window.addEventListener('resize', handleResize)
    }
    
  })

  const themeHandler = () => {
    setTheme(!isDark);

    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  return (
    <>
    <header className={"fixed w-full flex justify-between items-center px-4 md:px-12 h-[5rem] z-10 " + (!scrolledToTop && scrollDirection === 'down' ? "transform  translate-y-[-100%] " : "transform  translate-y-0 ") + "transition duration-300"}>
    <Link to='/'>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="60" height="60" viewBox="0 -20 437.000000 357.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,357.000000) scale(0.100000,-0.100000)"
      fill={isDark ? '#3B9598' : '#70C6CA'} stroke="none">
      <path d="M2060 3354 c-223 -26 -410 -78 -579 -164 -469 -235 -800 -693 -872
      -1205 -17 -116 -16 -345 0 -460 11 -74 40 -199 68 -286 2 -9 -7 -39 -21 -67
      l-26 -51 46 -3 47 -3 46 -90 c89 -170 176 -289 307 -416 284 -274 601 -417
      997 -449 383 -32 775 84 1087 321 159 121 330 317 425 487 34 61 44 72 68 72
      29 0 33 10 15 39 -9 15 -4 38 25 122 74 210 97 344 97 556 0 216 -29 371 -107
      581 l-34 93 30 35 c17 19 31 39 31 44 0 6 -24 10 -54 10 l-55 0 -46 76 c-142
      235 -375 452 -625 583 -140 73 -328 135 -490 161 -70 11 -323 21 -380 14z
      m365 -116 c279 -40 552 -171 780 -374 115 -102 275 -298 275 -337 0 -4 -36 -7
      -79 -6 l-80 3 -193 -199 c-106 -110 -235 -243 -286 -295 l-94 -95 6 301 7 301
      -157 6 c-87 4 -160 5 -162 2 -4 -3 -39 -1230 -42 -1437 l0 -38 163 0 c149 0
      164 2 164 18 -1 9 0 101 1 204 l2 187 76 80 c42 45 80 81 83 81 4 0 52 -64
      107 -142 56 -79 149 -212 208 -295 l108 -153 105 0 105 0 -28 -47 c-155 -269
      -386 -481 -669 -614 -97 -46 -281 -102 -390 -120 -44 -7 -152 -13 -240 -13
      -185 0 -275 12 -435 61 -368 111 -666 347 -867 687 -29 49 -53 93 -53 98 0 4
      32 8 70 10 l71 3 66 145 c36 80 71 150 77 156 8 8 86 9 286 3 151 -4 289 -8
      307 -8 31 -1 32 -2 94 -160 l63 -158 89 -7 c152 -10 260 -8 254 6 -9 23 -357
      888 -474 1178 -63 157 -118 288 -121 292 -4 3 -76 8 -161 9 -128 3 -155 1
      -162 -11 -5 -8 -53 -112 -108 -230 -423 -921 -444 -963 -452 -947 -39 68 -57
      448 -30 612 28 172 108 389 197 538 88 146 250 324 389 429 215 162 505 268
      795 292 64 5 253 -4 335 -16z m1169 -928 c29 -73 74 -235 87 -315 19 -114 17
      -388 -4 -501 -17 -97 -76 -294 -87 -294 -4 0 -76 102 -160 228 -84 125 -187
      275 -227 334 -40 59 -73 111 -73 115 0 11 34 49 221 244 90 94 175 184 188
      200 13 16 27 29 31 29 4 0 15 -18 24 -40z m-2048 -396 c41 -102 74 -192 74
      -200 0 -13 -24 -14 -177 -8 -98 4 -179 8 -181 9 -3 3 155 351 180 399 10 18
      11 18 20 2 6 -10 43 -101 84 -202z"/>
      </g>
      </svg>
    </Link>
      {width > 600 ? 
        <>
        <ol>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <li className="inline mx-6 text-xl select-none" key={i}>
              <Link id = {name} to={url} >{name}</Link>
            </li>
          ))}
        </ol>
        <button onClick={() => themeHandler()}>
          {
            isDark ? 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
            :
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>

          }
        </button>
        </>
        :
        <nav>
          <button onClick={() => setNav(!navOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={"fixed left-0 right-0 min-h-screen pl-8 space-y-10 mt-4 transform " + (navOpen ? "translate-x-[40%] " : "translate-x-full ")}>
            <ol>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <li className=" my-6 text-xl select-none font-bold" key={i}>
                <Link id = {name} to={url} onClick={() => setNav(!navOpen)}>{name}</Link>
              </li>
            ))}
          </ol>
          <button onClick={() => {setNav(!navOpen); themeHandler()}}>
            {
              isDark ? 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
              :
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>

            }
          </button>
          </div>

        </nav>
      }
    </header>
    <div className="pb-[110px]"></div>
    </>
  )
}
