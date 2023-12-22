import { useState } from "react"
import { Link } from "react-router-dom"
import { RowHandle } from "./RowHandle"

export const NavbarLinks = ({ element }) => {

  const [heading, setHeading] = useState('')

  return (
    <div className="text-left cursor-pointer group">
      <h4
        className="transition-colors duration-200 hover:text-deep-orange-accent-400 py-2 flex justify-between items-center md:pr-0 pr-5 group" 
        onClick={ () => heading !== element.key ? setHeading(element.key) : setHeading('')}
      >
        { element.key }
        {element.hasDropDownMenu && <RowHandle elementKey={element.key} heading={heading} />}
      </h4>
      { element.hasDropDownMenu && (
        <>
          <div className={`md:absolute md:hidden group-hover:md:block hover:md:block`}>
          <div className={`py-1 max-md:hidden`}></div>
            <div className="py-3 max-md:hidden">
              <div className="bg-white w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
            </div>
            <div className={`md:p-3 bg-white md:shadow md:rounded-md ${heading !== element.key && 'max-md:hidden'}`}>
              {element.dropDownMenus.map(subMenu => (
                <li key={subMenu.key} className="my-4">
                  <Link 
                    className="transition-colors duration-200 hover:text-deep-orange-accent-400 
                      max-md:py-2 max-md:pl-7 max-md:font-semibold max-md:pr-5" 
                    to={subMenu.path}>
                    {subMenu.key}
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
