import React, {useEffect, useRef} from 'react'
import {srConfig} from '../../config'
import sr from '../../utils/sr';



export default function Experience() {

  const revealContainer = useRef(null);

  useEffect(() => {

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <div ref={revealContainer} id="experience" class="container mx-auto flex flex-col items-center py-12 sm:py-24 h-[90vh]">

    </div>
  )
}


