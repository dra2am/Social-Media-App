"use client"

import { TopNav } from "_components/TopNav"
import {LoginCreate}  from "_components/LoginCreate"

const LoginPage = () => {
   return (
      <>
      <TopNav/>
      <LoginCreate isCreateAcc={false}/>
      </>
   )
}

export default LoginPage;