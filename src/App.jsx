import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuLists from './components/MenuLists';
import About from './components/About';
import Art from './components/Art';
import Notice from './components/Notice';
import Menu from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Notice />
      <Navbar />
      <Hero />
      <MenuLists />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default App
