import { NavLink } from "react-router-dom";
import { useAuth } from '../Authentication/auth'



export const NavBar = () => {
    const auth = useAuth()

    return (
        <nav>
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/about">About</NavLink>
            <NavLink to = "/product">Products</NavLink>
            <NavLink to = "/profile">Profile</NavLink>
            {!auth.user && (
                    <NavLink to = "/login">Login</NavLink>
                )
            }
        </nav>
    )
}