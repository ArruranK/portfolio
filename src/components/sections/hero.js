import React, {useEffect, useRef} from 'react'
import {socialMedia, srConfig} from '../../config'
import sr from '../../utils/sr';


export default function Hero( {isDark} ) {

  const revealContainer = useRef(null);

  useEffect(() => {

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <div ref={revealContainer} class="container mx-auto flex flex-col items-center py-12 sm:py-24 h-[80vh]">
          <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-[600] leading-7 md:leading-10">
              Hey, I'm Arruran
            </h1>
            <p class="mt-5 sm:mt-10 lg:w-10/12 font-normal text-center text-sm sm:text-lg"> I'm a Computer Science student at <a className= "link" href="https://www.mcmaster.ca/" rel= "noreferrer" target="_blank"> McMaster University </a>, with a passion for software development. Some of my interests include Web/Mobile development, Machine learning, and Game development.</p>
          </div>
          <div class="flex justify-center items-center">
            <ul class= "inline-flex">
              <li id = "Github" class= "mx-5">
                <a href={socialMedia.github} rel= "noreferrer" target="_blank">
                <svg fill={isDark ? "black" : "white"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
               </li>
              <li id = "Linkedin" class= "mx-5">
                <a href={socialMedia.linkedin} rel= "noreferrer" target="_blank">
                <svg fill={isDark ? "black" : "white"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a> 
              </li>
              <li id = "Gmail" class= "mx-5"> 
                <a href={socialMedia.gmail} rel= "noreferrer" target="_blank">
                  <svg fill={isDark ? "black" : "white"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24" height="24">
                    <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
  )
}
