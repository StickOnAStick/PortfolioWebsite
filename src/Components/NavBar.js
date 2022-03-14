/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import logo from '../Images/GeraltProfile.jpg';

const navigation = [
  { name: 'Home', to: "/", href: '#', current: true },
  { name: 'About', to: "/About", href: '#', current: false },
  { name: 'Projects', to: "/Projects", href: '#', current: false },
  { name: 'Updates', to: "/Updates", href: '#', current: false},
  { name: 'Contact', to: "/Contact", href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-zinc-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/*NavBrand */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center hover:scale-150 transition duration-300 ease-in-and-out">
                  <a href="#">
                  <img
                    className="block lg:hidden h-9 w-auto rounded-md"
                    src={logo}
                    alt="HomePage"
                  />
                  <img
                    className="hidden lg:block h-9 w-auto rounded-md"
                    src={logo}
                    alt="HomePage"
                  />
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' bg-violet-700 bg-opacity-60 text-white hover:shadow-md hover:textshadow-lg hover:scale-110 transition duration-300 ease-in-out' : 'text-gray-200 hover:bg-zinc-700 hover:bg-opacity-70 hover:shadow-fuchsia-500 hover:shadow-md hover:text-white hover:scale-110 transition duration-300 ease-in-out',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <Link to={item.to}>
                          {item.name}
                        </Link>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-violet-700 bg-opacity-70 text-white hover:shadow-violet-700 hover:shadow-md' : 'text-white hover:bg-zinc-700 hover:shadow-violet-700 hover:shadow-md hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link to={item.page} >
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}