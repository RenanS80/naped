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
                            <NavLink to="/series" className={({ isActive }) => isActive ? 'nav-item-active' : ''}>Séries</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies" className={({ isActive }) => isActive ? 'nav-item-active' : ''}>Filmes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/animes" className={({ isActive }) => isActive ? 'nav-item-active' : ''}>Animes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/games" className={({ isActive }) => isActive ? 'nav-item-active' : ''}>Games</NavLink>
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