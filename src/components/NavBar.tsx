'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import clsx from 'clsx'

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label='main navigation' className='bg-concretewhite text-slate-950 p-2 w-[90%] overflow-hidden rounded-b-xl mb-4'> 
      <ul className='flex flex-col justify-between'>
        <div className='flex flex-col items-center justify-between'>
          <NameLogo />
          <button 
            aria-expanded={open}
            aria-label="Menu abierto"
            className="block p-2 text-2xl text-slate-950 md:hidden"
            onClick={() => setOpen(true)}
          >
            <span>Open</span>
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-concretewhite bg-opacity-100  pr-4 pt-14 transition-transform duration-200 ease-in-out overflow-hidden",
            open ? "translate-y-0" : "translate-y-[-100%]",
          )}
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <ul className="relative z-10">
              <li>first</li>
              <li>second</li>
            </ul>
          </div>
          <button
            aria-label="Menu Cerrado"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl dark:text-slate-800 text-slate-50"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <DesktopMenu />
      </ul>
    </nav>
  )
}

const NameLogo = () => {
  return (
    <Link
      href="/"
      aria-label="Inicio"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      <div className='flex justify-center items-center'>
        {/* LOGO */}
        <p className='text-xl font-bold'>business name</p>
      </div>
    </Link>
  )
}

const DesktopMenu = () => {
  return (
    <div className='relative flex-row justify-end items-center gap-2 bg-transparent py-0 z-50 hidden md:flex'>
      <ul className='flex flex-row w-full sm:w-[60%] justify-around'>
        <li>
          <span>1</span>
        </li>
        <li>
          <span>2</span>
        </li>
        <li>
          <span>3</span>
        </li>
      </ul>
    </div>
  )
}

export default NavBar