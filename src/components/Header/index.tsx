import { Link } from 'react-router-dom';

import { BrandHeader } from './styles';

export const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <BrandHeader>Metroid Prime Randomizer</BrandHeader>
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Games
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    Metroid Prime
                                </a>
                                <a className="navbar-item">
                                    Metroid Prime 2: Echoes
                                </a>
                                <a className="navbar-item">
                                    Metroid Prime 3: Corruption
                                </a>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <a href="https://discord.gg/WWGcay6">
                                Community Discord
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link to="/" className="button is-link">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </nav >
    );
};

export default Header;