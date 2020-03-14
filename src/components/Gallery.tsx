import React from 'react';

// Components
import Header from './Header';
import DisplayImages from './DisplayImages';

function Gallery(props: any) {

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