import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { BrandText } from './styles';

export const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <BrandText>Metroid Prime Randomizer</BrandText>
                </Link>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <a href="https://discord.gg/WWGcay6" target="_blank">
                            Join our Discord
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;