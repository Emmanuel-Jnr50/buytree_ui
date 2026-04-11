import React from 'react'

const Logo = ( src, alt, size = 26 ) => {
  return (
    <img 
        src={src} 
        alt={alt} 
        width={size}
        height={size}
        className="object-contain" 
    />
  )
}

export default Logo
