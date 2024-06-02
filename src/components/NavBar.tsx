import { Link } from "react-router-dom";
import "../App.css"

interface PageProps{
    className?: string
}

const NavBar: React.FC<PageProps> = ({className='',...rest}) =>{
    return(
        <div className={`nav-bar ${className}`}{...rest} >
            <div className="logo">
                <h1 >LOGO</h1>
            </div>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/rents'>Rents</Link>
                <Link to='/land'>Land</Link>
                <Link to='/contacts'>Contacts</Link>
            </div>
        </div>
    )
}

export default NavBar;