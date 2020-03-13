import React, { useState, useEffect } from 'react';
import './App.scss';
import { getCollections } from './getCollections';
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useStore } from "./store";
import { apiCall } from './apiCall';

// Components
import Homepage from './components/Homepage';
import Gallery from './components/Gallery';

function App() {
  const {state, dispatch}: any = useStore();

  const routes = [
    {path: "/", name: "homepage", Component: Homepage},
    {path: "/gallery", name: "gallery", Component: Gallery},
  ];

  apiCall("toronto", "architecture");

  return (
    <React.Fragment>
      {routes.map(({ path, name, Component }) => (
            <Route key={name} exact path={path}>
  
              {({match} : { match: any}) => (
                <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                unmountOnExit>
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}

    </React.Fragment>
  );
}

export default App;
