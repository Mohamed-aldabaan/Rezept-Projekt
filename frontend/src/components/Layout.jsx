import {NavLink, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <nav>
            <ul>
                <li><NavLink to = "/">Home</NavLink></li>
                <li><NavLink to = "/addRezept">Add Rezept</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout