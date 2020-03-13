import React, { useEffect } from 'react';
import { useStore } from "../store";

function DisplayImages(props: any) {
    const {state, dispatch}: any = useStore();


    useEffect(() => {
        setTimeout( () => {
            const displayImagesContainer = document.getElementById('displayImagesContainer');
            displayImagesContainer.innerHTML = "";
            if (state.imagesData) {
                if (state.imagesData.results) {
                    console.log(state.imagesData.results);
                    state.imagesData.results.forEach((image: any) => {
                        appendImagesToPage(image);
                        const inputValue: any = document.getElementById("query");
                        inputValue.value = null;
                    })
                }
                console.log(state.imagesData);
            }
        }, 3000)
    }, [state.imagesData, state.searchCollection])

    const appendImagesToPage = (image: any) => {
        const displayImagesContainer = document.getElementById('displayImagesContainer');
        const imageElement = document.createElement('img');
        imageElement.src = image.urls.small;
        displayImagesContainer.appendChild(imageElement);
    }
    
    return (
        <React.Fragment>
            <div id="displayImagesContainer" className="displayImagesContainer wrapper">
            </div>
        </React.Fragment>
    );
}

export default DisplayImages;