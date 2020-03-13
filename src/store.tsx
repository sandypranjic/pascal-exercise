// store.js
import React, { createContext, useContext, useReducer } from 'react';



const StoreContext: any = createContext(null);
const initialState: any = {searchQuery: null, selectedCollection: null, imagesData: null,}


const reducer: any = (state: any, action: any) => {
    switch (action.type) {
        case "updateSearchQuery":
            return {
                searchQuery: action.searchQuery,
                selectedCollection: state.selectedCollection,
                imagesData: state.imagesData,
            }
        case "updatedSelectedCollection":
            return {
                searchQuery: state.searchQuery,
                selectedCollection: action.selectedCollection,
                imagesData: state.imagesData,
            }
        case "updatedImagesData":
            return {
                searchQuery: state.searchQuery,
                selectedCollection: state.selectedCollection,
                imagesData: action.imagesData,
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const StoreProvider: any = ({children} : { children: any}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);