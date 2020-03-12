import React, { useState } from 'react';

// Components
import HomepageLogo from './HomepageLogo';
import Search from './Search';

function Homepage(props: any) {
    return (
        <React.Fragment>
            <section className='homepage'>
                <HomepageLogo />
                <form>
                    <Search {...props} />
                </form>
            </section>
        </React.Fragment>
    );
}

export default Homepage;