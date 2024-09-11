'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

import clsx from 'clsx'

const NavBar = ({
  settings,
}: {
  settings: Content.SettingsDocument;
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label='main navigation' className='bg-navyblue text-slate-950 p-2  w-full rounded-b-xl mb-4 shadow shadow-slate-950'> 
      <ul className='flex flex-col justify-between'>
        <div className='flex flex-col items-center justify-between'>
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
          <button
            aria-label="Menu Cerrado"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl dark:text-slate-800 text-slate-50"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          {settings.data.nav_item.map(({ nav_link, nav_label }, index) => (
            <React.Fragment key={nav_label}>
              <li className="first:mt-8">
                <PrismicNextLink
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 ",
                  )}
                  field={nav_link}
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(nav_link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                      pathname.includes(asLink(nav_link) as string)
                        ? "translate-y-6"
                        : "translate-y-18",
                    )}
                  />
                  <span className="relative">{nav_label}</span>
                </PrismicNextLink>
              </li>
              {index < settings.data.nav_item.length - 1 && (
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                  aria-hidden="true"
                >
                  --
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
        <DesktopMenu settings={settings} pathname={pathname}/>
      </ul>
    </nav>
  )
}

const NameLogo = () => {
  return (
    <Link
      href="/"
      aria-label="Inicio"
      className="text-xl font-extrabold tracking-tighter text-concretewhite"
    >
      <div className='flex justify-center items-center'>
        {/* LOGO */}
        <p className='text-2xl font-bold'>PHES</p>
      </div>
    </Link>
  )
}

const DesktopMenu = ({
  settings,
  pathname,
}: {
  settings: Content.SettingsDocument;
  pathname: string;
}) => {
  return (
    <div className='relative flex-row justify-between items-center gap-2 bg-transparent py-2 px-4 z-50 hidden md:flex'>
      <NameLogo />
      <ul className='flex flex-row items-center w-full sm:w-[60%] justify-around'>
        {settings.data.nav_item.map(({ nav_link, nav_label }, index) => (
          <React.Fragment key={nav_label}>
            <li>
              <PrismicNextLink
                className={clsx(
                  "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-concretewhite",
                )}
                field={nav_link}
                aria-current={
                  pathname.includes(asLink(nav_link) as string) ? "page" : undefined
                }
              >
                <span
                  className={clsx(
                    "absolute inset-0 z-0 h-full rounded bg-realred transition-transform  duration-300 ease-in-out group-hover:translate-x-0",
                    pathname.includes(asLink(nav_link) as string)
                      ? "translate-x-20"
                      : "translate-x-40",
                  )}
                />
                <span className="relative text-2xl font-bold">{nav_label}</span>
              </PrismicNextLink>
            </li>
            {index < settings.data.nav_item.length - 1 && (
              <span
                className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                aria-hidden="true"
              >
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default NavBar