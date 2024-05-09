import React, { useEffect } from 'react';
import './Header.css';

function Header() {
    useEffect(() => {
        const listItem = document.querySelectorAll("#landing-header li") as NodeListOf<HTMLElement>;
        const menuBackDrop = document.querySelector("#menu-backdrop") as HTMLElement;
    
        listItem.forEach((item) => {
          item.addEventListener("mouseenter", () => {
            const { left, top, width, height } = item.getBoundingClientRect();
            // const { clientHeight, clientWidth } = item;
    
            menuBackDrop.style.setProperty("--left", `${left}px`);
            menuBackDrop.style.setProperty("--top", `${top}px`);
            menuBackDrop.style.setProperty("--width", `${width}px`);
            menuBackDrop.style.setProperty("--height", `${height}px`);
            menuBackDrop.style.opacity = "1";
            menuBackDrop.style.visibility = "visible";

            // console.log("Height, Width: ", {clientHeight, clientWidth});
          });
    
          item.addEventListener("mouseleave", () => {
            menuBackDrop.style.opacity = "0";
            menuBackDrop.style.visibility = "hidden";
          });
        });
    
        const $header = document.querySelector("#landing-header")as HTMLElement;
    
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.90
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const { isIntersecting } = entry;
            if (isIntersecting) {
              const color = entry.target.getAttribute('data-header-color');
              $header.style.color = color ?? '';
            }
          });
        }, observerOptions);
    
        const $sections = document.querySelectorAll(".landing-section");
        $sections.forEach((section) => observer.observe(section));
    
        // Remueve los event listeners y el observer cuando el componente se desmonta
        return () => {
          listItem.forEach((item) => {
            item.removeEventListener("mouseenter", () => {});
            item.removeEventListener("mouseleave", () => {});
          });
          observer.disconnect();
        };
      }, []); // Asegúrate de pasar un array vacío como segundo argumento para que useEffect solo se ejecute una vez

    function scrollToElement(elementId:string, event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
      event.preventDefault();
      const element = document.getElementById(elementId);
      if (element) {
        const offset = 60; // Ajusta este valor según sea necesario
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }

    return (
        <header
            id="landing-header"
            className="
                flex items-center
                fixed top-0
                w-full justify-between
                z-40 text-white">
          <nav className="flex flex-grow justify-center basis-0">
          <ul className="flex text-sm
            [&>li>a]:transition-colors
            [&>li>a]:duration-500
            [&>li>a]:text-current
            [&>li>a]:font-medium
            [&>li>a]:inline-block
            [&>li>a]:px-4
            [&>li>a]:py-2">
            <li><a href="#about-me" onClick={(event) => scrollToElement('about-me',event)}>ABOUT ME</a></li>
            <li><a href="#skills" onClick={(event) => scrollToElement('skills',event)}>SKILLS</a></li>
            <li><a href="#experience" onClick={(event) => scrollToElement('experience',event)}>EXPERIENCE</a></li>
            <li><a href="#projects" onClick={(event) => scrollToElement('projects',event)}>PROJECTS</a></li>
          </ul>
          </nav>

          <div
            id="menu-backdrop"
            className={`
            absolute bg-black/5 backdrop-blur-lg rounded
            translate-x-[var(--left)] translate-y-[var(--top)]
            left-0 top-0
            w-[var(--width)] h-[var(--height)]
            transition-all duration-500
            ease-in-out opacity-0 -z-10
            `}
            >
          </div>  
          
        </header>
    );
  }
  
  export default Header;

  // <header
  //           id="landing-header"
  //           className="
  //               py-3 px-10
  //               flex items-center
  //               fixed top-0
  //               w-full justify-between
  //               z-40 text-white">
  //         <nav className="flex flex-grow justify-end basis-0">
  //         <ul className="flex text-sm
  //           [&>li>a]:transition-colors
  //           [&>li>a]:duration-500
  //           [&>li>a]:text-current
  //           [&>li>a]:font-medium
  //           [&>li>a]:inline-block
  //           [&>li>a]:px-4
  //           [&>li>a]:py-2">
  //           <li><a href="#about-me">ABOUT ME</a></li>
  //           <li><a href="#skills">SKILLS</a></li>
  //           <li><a href="#experience">EXPERIENCE</a></li>
  //           <li><a href="#projects">PROJECTS</a></li>
  //         </ul>
  //         </nav>

  //         <div
  //           id="menu-backdrop"
  //           className={`
  //           absolute bg-black/5 backdrop-blur-lg rounded
  //           translate-x-[var(--left)] translate-y-[var(--top)]
  //           left-0 top-0
  //           w-[var(--width)] h-[var(--height)]
  //           transition-all duration-500
  //           ease-in-out opacity-0 -z-10
  //           `}
  //           >
  //         </div>  
          
  //       </header>