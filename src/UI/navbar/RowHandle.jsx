import React from 'react'

const downRowCode = "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
const upRowCode = "M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"

export const RowHandle = ({ heading, elementKey}) => {
    return (
        <>
            <span className="text-xl md:hidden inline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d={`${heading === elementKey ? upRowCode : downRowCode }`} clipRule="evenodd" />
                </svg>
            </span>

            <span className="text-xl md:mt-1 md:ml-0.5 md:block hidden group-hover:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d={downRowCode} clipRule="evenodd" />
                </svg>
            </span>
        </>
    )
}
