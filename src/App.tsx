import React, { useState } from 'react';
import './App.scss';
import { apiCall } from './apiCall';
import { getCollections } from './getCollections';

// Components
import Homepage from './components/Homepage';

function App() {
  const [searchQuery, setSearchQuery] = useState("an empty string WOw");
  const [collection, setCollection] = useState("Collections");

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
  }

  const updateCollection = (collection: string) => {
    setCollection(collection);
  }

  apiCall('dog');
  getCollections();
  return (
    <React.Fragment>
      <Homepage searchQuery={searchQuery} updateSearchQuery={updateSearchQuery} collection={collection} updateCollection={updateCollection} />
    </React.Fragment>
  );
}

export default App;
