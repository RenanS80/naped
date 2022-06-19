import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

function Navbar() {

    const [mobileToggle, setMobileToggle] = useState(false);

    return (
        <header>
            <div className="container">
                <div className="header-brand">
                    <h3>Naped</h3>
                </div>

                <div className={mobileToggle ? 'menu-section on' : 'menu-section'} onClick={() => setMobileToggle(!mobileToggle)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item-active' : ''}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/technologies" className={({ isActive }) => isActive ? 'nav-item-active' : ''}>Tecnologia</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sports" className={({ isActive }) => isActive ? 'nav-item-active' : ''}>Esportes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/entertainments" className={({ isActive }) => isActive ? 'nav-item-active' : ''}>Entretenimento</NavLink>
                            </li>
                            <li>
                                <NavLink to="/business" className={({ isActive }) => isActive ? 'nav-item-active' : ''}>Negócios</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
}

export default Navbar;