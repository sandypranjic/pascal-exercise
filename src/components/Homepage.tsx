import React from 'react';

// Components
import HomepageLogo from './HomepageLogo';
import Search from './Search';

function Homepage() {

    return (
        <React.Fragment>
            <section className='homepage'>
                <HomepageLogo />
                <section className="homepageSearch">
                    <Search />
                </section>
            </section>
        </React.Fragment>
    );
}

export default Homepage;