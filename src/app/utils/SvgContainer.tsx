import Image from 'next/image'
import React from 'react'

export const SvgContainer = () => {
  return (
    <div>SvgContainer</div>
  )
}
export const MainLogo = () => {
    return(
        <Image src="assets/logo/main_logo.svg" alt='main_happy_logo'  width={80}height={50} />
    )
}