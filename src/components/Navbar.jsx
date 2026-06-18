import { Link } from "react-router-dom"
export default function Navbar(){

    return(
        <>

        <nav className="main-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/portal">Portal</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
    
        </>
    )
}