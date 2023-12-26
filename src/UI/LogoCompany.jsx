import React from 'react'
import { Link } from 'react-router-dom'

export const LogoCompany = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="w-14 h-14 bg-black m-2 rounded-full">
        {/* <img
          src="/CEV-logo.png"
          className="w-14"
          fill="none"
          alt='Logo Company'
        /> */}
      </div>
      <span className="text-xl font-bold tracking-wide text-blue-950 uppercase">
        Eliseo Ureña Taveras
      </span>
    </Link>
  )
}
