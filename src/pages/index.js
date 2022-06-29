import React, {useState, useEffect} from 'react';

import {Layout} from '../components'

import {Hero, About, Experience, Projects, Contact} from '../components/sections'

const Page = () => {
  const [isDark, setTheme] = useState(false);

  useEffect(()=>{
    document.body.classList.add('dark');
  }, [])

  return (
    <Layout isDark = {isDark} setTheme = {setTheme}>
      <Hero isDark = {isDark} />
      <About isDark = {isDark} />
      <Experience isDark = {isDark} />
      <Projects isDark = {isDark} />
      <Contact isDark = {isDark} />
    </Layout>
  );
};

export default Page;
