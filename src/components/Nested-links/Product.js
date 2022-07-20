import { Link, Outlet} from 'react-router-dom'

export const Product = () => {
    return (
        <>
        <div>
            <input type="search" placeholder="search products"></input>
        </div>
        <nav>
            <Link to='feature'>Feature</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
        </>
    )
}