import { NavLink } from 'react-router-dom';

import './styles.scss';

function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="header-brand">
                    <h3>Naped</h3>
                </div>

                <nav>
                    <ul className="nav-item-links">
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? 'nav-item-active' : ''}>Home</NavLink>
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

                    <div className="nav-item-button">
                        <button>Minha conta</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;