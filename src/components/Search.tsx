import React from 'react';

function Search(props: any) {
    console.log(props);

    const changeState = () => {
        console.log("state was changed");
    }

    const listenForChange = (event: any) => {
        const value = event.target.value;
        if (event.target.localName === "input") {
            console.log("you typed");
            props.updateSearchQuery(value);
        }
        if (event.target.localName === "select") {
            console.log("you selected");
            props.updateCollection(value);
        }
    }

    return (
        <React.Fragment>
                <input type='text' name='query' id='query' placeholder='Query' onChange={listenForChange} />
                <div className="selectContainer">
                    <select className='collections' id='collections' onChange={listenForChange}>
                        <option value='Collections'>Collections</option>
                    </select>
                </div>
                <button type='submit'>Search</button>
        </React.Fragment>
    );
}

export default Search;