'use client'
import { useEffect, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Work from "./Components/Work";


export default function Home() {
  const[isDarkMode,setIsDarkMode]=useState(false);
useEffect(()=>{
if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-Scheme:dark)').matchess))
{
setIsDarkMode(true);
}
else{
setIsDarkMode(false);
}
},[])

  useEffect(()=>{
     if(isDarkMode)
     {
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
     }
     else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
     }
  },[isDarkMode])
  return (
  <>
  <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
  <Header isDarkMode={isDarkMode}/>
  <About isDarkMode={isDarkMode}/>
  <Services isDarkMode={isDarkMode}/>
  <Work isDarkMode={isDarkMode}/>
  <Contact isDarkMode={isDarkMode}/>
  <Footer isDarkMode={isDarkMode}/>
  </>
  );
}
