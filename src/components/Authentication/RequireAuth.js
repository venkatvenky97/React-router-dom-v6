import { Children } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./auth"

export const RequireAuth = () => {
  const auth = useAuth()

  if(!auth.user) {
    return  <Navigate>RequireAuth</Navigate>
    
  }

    return Children
}
