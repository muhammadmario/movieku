import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SidebarData } from './SidebarData'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                <div class="main">
                    <Link to="#" className="menu-bars">
                        <i class="fas fa-bars" onClick={showSidebar}></i>
                    </Link>
                    <h1>Movieku</h1>
                </div>
                <div class="search">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search movie" />
                </div>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className="menu-bars">
                            <i class="fas fa-times"></i>
                        </Link>
                    </li>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.icon}</span>

                                        <p>{item.title}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    );
}

export default Navbar;