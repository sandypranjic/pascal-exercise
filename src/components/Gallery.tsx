import React, { useEffect } from 'react';
// import { generateSelectOptions } from '../generateSelectOptions';
import { useStore } from "../store";

// Components
import Header from './Header';
import DisplayImages from './DisplayImages';

function Gallery(props: any) {
    const {state, dispatch}: any = useStore();

    return (
        <React.Fragment>
            <Header {...props} />
            <main>
                <DisplayImages {...props} />
            </main>
        </React.Fragment>
    );
}

export default Gallery;