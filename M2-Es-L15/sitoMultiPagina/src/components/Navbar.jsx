import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <header>

        <nav>
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/Blog"> Blog</NavLink> 
        </nav>

    </header>
  )
}

export default Navbar
