import React, { useEffect } from 'react';

import { useStore } from "../store";

// Components
import HomepageLogo from './HomepageLogo';
import Search from './Search';

function Homepage(props: any) {
    const {state, dispatch}: any = useStore();

    // useEffect( () => {
    //     if (props.listOfCollectionNames !== null) {
    //         console.log(props.listOfCollectionNames);
    //         generateSelectOptions(props.listOfCollectionNames);
    //     }
    // }, [props.listOfCollectionNames])

    return (
        <React.Fragment>
            <section className='homepage'>
                <HomepageLogo />
                <section className="homepageSearch">
                    <Search {...props} />
                </section>
            </section>
        </React.Fragment>
    );
}

export default Homepage;