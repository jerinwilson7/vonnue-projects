import React from 'react'

type ButtonProps={
    type:"regular" | "small" | "extraSmall" | "transparent" |"brown"
    children:React.ReactNode;
    disabled?:boolean
}

type StyleType={
    regular:string;
    small:string;
    extraSmall:string
    transparent:string
    brown:string
}

const Button = ({children,type,disabled}:ButtonProps) => {

  const styles:StyleType = {
    small:'bg-hubbo-yellow w-[180px] py-3 px-10 rounded-2xl text-hubbo-brown font-semibold md:block hover:bg-hubbo-yellow-300 focus:ring focus:ring-copper-500 focus:ring-offset-2 disabled:bg-disabled disabled:text-black active:bg-hubbo-yellow-600',
    transparent:'bg-white py-3 px-10 rounded-2xl text-hubbo-brown font-semibold md:block border-2 border-hubbo-brown focus:ring focus:ring-copper-500 focus:ring-offset-2 disabled:border-disabled-100',
    brown:'bg-hubbo-brown py-3 px-10 rounded-2xl text-white font-semibold md:block border-2 border-hubbo-brown',
    regular:"bg-hubbo-brown w-[328px]  text-white font-semibold py-4 px-10 text-lg rounded-2xl hover:bg-copper-800 focus:ring focus:ring-copper-500 focus:ring-offset-2 disabled:bg-disabled disabled:text-black",
    extraSmall:"bg-hubbo-yellow  text-hubbo-brown text-xs inline-block rounded-md font-semibold tracking-wide px-7 py-2 hover:bg-yellow-600 focus:ring focus:ring-copper-500 focus:ring-offset-2 disabled:bg-disabled"
  }

  return (
    <button disabled={disabled} className={styles[type]}>{children}</button>
  )
}

export default Button


