'use client'
import Link from 'next/link'
import { Cart } from './Cart'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebase.config'
import { signOut } from "firebase/auth";
import { PassReducerInterface } from 'page'


export const TopNav =( props : PassReducerInterface)=> {

  const [open, setOpen] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<string | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
      if(user){
        setIsAuth(true);
        setUser(user.email);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
  }, []);

  const onLogout = () => {
      signOut(auth);
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        {/* Mobile - side panel */}
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            { //could put this logic in its own component...
                    isAuth ? 
                    <div className='flow-root'>             
                      <span className="text-sm font-medium text-gray-400"> {user} </span>
                      <Link href="/" onClick={onLogout} className="text-sm font-medium text-gray-700 hover:text-gray-800">Logout</Link>
                    </div>
                    : 
                    <>
                      <div className='flow-root'>
                        <Link className="text-sm font-medium text-gray-700 hover:text-gray-800" href="/login">Login</Link>
                      </div>
                      <div className='flow-root'>
                        <Link className="text-sm font-medium text-gray-700 hover:text-gray-800" href="/createAccount">Create account</Link>
                      </div>
                    </>
                  }     
            </div>

          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-orange-200 px-4 text-sm font-semibold text-orange-800 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
              <Link className="font-bold text-4xl" href="/">All Curls</Link>
              </div>

              {/* Flyout menus */}

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  { //could put this logic in its own component...
                    isAuth ? 
                    <>             
                    <span className="text-sm font-medium text-gray-400"> {user} </span>
                    <Link href="/" onClick={onLogout} className="text-sm font-medium text-gray-700 hover:text-gray-800">Logout</Link>
                    </>
                    : 
                    <>
                      <Link className="text-sm font-medium text-gray-700 hover:text-gray-800" href="/login">Login</Link>
                      <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                      <Link className="text-sm font-medium text-gray-700 hover:text-gray-800" href="/createAccount">Create account</Link>
                    </>
                  }     
                </div>

                {/* Search - will be own component? */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <Cart {...props} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}



// import Link from 'next/link'
// import { Cart } from './Cart'

// export const TopNav = () => {
//     return (
//         <>
//             <div>
//                 <div>
//                     <p className="text-center font-semibold text-lg py-1 bg-orange-200 text-orange-800">
//                         Free Shipping on U.S Orders of $50 & Up
//                     </p>
//                 </div>
//                 <div className="flex-auto">
//                     <Link className="font-bold text-4xl" href="/">All Curls</Link>
//                     {/* will take to login page. Will ask user if has account there */}
//                     <Link href="/login">Login</Link>
//                     {/* Will display amt of items at all times. Drop down of items when clicked. 
//                     Should be own component?*/}
//                     <Cart></Cart>
//                 </div>
//             </div>
//         </>
//     )
// }