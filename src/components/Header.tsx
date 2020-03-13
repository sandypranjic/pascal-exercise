import React from 'react';
import logo from '../assets/logo.svg';

// Components
import Search from './Search';

function Header(props: any) {
    return (
        <React.Fragment>
            <header>
                <div className="logoContainer">
                    <img src={logo} alt="ImageSearch logo" />
                </div>
                <section className="headerSearch">
                    <Search {...props} />
                </section>
            </header>
        </React.Fragment>
    );
}

export default Header;