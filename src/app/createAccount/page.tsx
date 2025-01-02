"use client"

import { TopNav } from "_components/TopNav"
import { LoginCreate } from "_components/LoginCreate"

const CreateAccount = () => {
   return (
      <>
      <TopNav/>
      <LoginCreate isCreateAcc={true}/>
      </>
   )
}

export default CreateAccount;