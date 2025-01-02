"use client"

import { FormEvent, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config"
import { useRouter } from 'next/navigation'
import Link from 'next/link' 

export interface LoginCreateInterface  {
    isCreateAcc : boolean
}

export const LoginCreate = ({isCreateAcc}: LoginCreateInterface) => {

    const [userName, setUserName] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const router = useRouter();

    const onUserNameChange = (event: FormEvent<HTMLInputElement>) => {
      setUserName(event.currentTarget.value);
    }

    const onPassChange = (event: FormEvent<HTMLInputElement>) => {
      setPass(event.currentTarget.value)
    }

    const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {

        if(isCreateAcc) {
          //create account then sign in
          await createUserWithEmailAndPassword(auth, userName, pass);
        } else {
          
          await signInWithEmailAndPassword(auth, userName, pass);
        }
        
        router.push("/")
      } catch (error) {
        console.log(error)
      }
      
    }

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {isCreateAcc ? "Create Account" :  "Sign In" }
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={onFormSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={onUserNameChange}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  { isCreateAcc ? "" : 
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                  }
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={onPassChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isCreateAcc ? "Create Account" : "Sign In"}
              </button>
            </div>
          </form>
        { isCreateAcc ? "" : 
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account yet? {' '}
            <Link href="/createAccount">
              <span className="font-semibold text-indigo-600 hover:text-indigo-500">
                Create New Account
              </span>
            </Link>
          </p> 
          }
        </div>
      </div>
    </>
  );
}