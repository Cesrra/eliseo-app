import React from 'react'
import { NavbarLinks } from './NavbarLinks'

export const NavbarELements = ({ navbar_elements, isMobile }) => {
  return (    
    <ul className={`
        items-center space-x-4 md:flex bg-white
        max-md:absolute max-md:w-full max-md:h-full max-md:bottom-0 max-md:py-28 max-md:space-x-0
        max-md:pl-6 max-md:duration-500 max-md:${isMobile ? "left-0" : "left-[-100%]"}
      `}>
        {
        navbar_elements.map(( element ) => (
          <NavbarLinks key={element.key} element={ element } />
        ))
        }
    </ul>
  )
}
