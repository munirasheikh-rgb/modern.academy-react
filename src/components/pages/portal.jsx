
import { Link ,Outlet} from "react-router-dom"
export default function Portal(){

    return(
        <>
        <nav className="main-nav">
      <ul>
        <li><Link to="/portal/dashboard">Dashboard</Link></li>
        <li><Link to="/portal/profile">Profile</Link></li>
        <li><Link to="/potal/results">Results</Link></li>
        <li><Link to="/portal/logout">LogOut</Link></li>
      </ul>
    </nav>
    <Outlet/>
      
        </>
    )
}