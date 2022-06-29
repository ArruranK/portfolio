import React, {useEffect, useRef} from 'react'
import {email, srConfig} from '../../config'
import sr from '../../utils/sr';


export default function Contact() {

  const revealContainer = useRef(null);

  useEffect(() => {

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <div ref={revealContainer} id="contact" class="container justify-center mx-auto flex flex-col items-center py-12 sm:py-24 h-[80vh]">

      <h2 className="my-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-[600] leading-7 md:leading-10">Contact Me</h2>

      <p className="my-4 text-center">Want to say hi? My inbox is always open.</p>

      <a id="contact-button" className="mt-8 py-3 px-4 border-2 border-solid" href={`mailto:${email}`}>
        Say Hello!
      </a>

    </div>
  )
}
