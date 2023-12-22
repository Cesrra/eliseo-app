import React from 'react'
import { Link } from 'react-router-dom'

export const LogoCompany = () => {
  return (
    <Link to="/" className="flex items-center">
        <img
            src="/CEV-logo.png"
            className="w-14"
            fill="none"
            alt='Logo Company'
        />
        <span className="text-xl font-bold tracking-wide text-blue-950 uppercase">
            CAPAEMVI
        </span>
    </Link>
  )
}
