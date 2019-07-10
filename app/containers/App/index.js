/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MyInventory from 'containers/MyInventory/Loadable';

export default function App() {

  return (
    <div>
      <Helmet
        titleTemplate="%s - Pizza Heroes"
        defaultTitle="Pizza Heroes"
      >
        <meta name="description" content="Pizza Heroes application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/my-inventory" component={MyInventory} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

// Hook
let cachedScripts = [];
function useScript(src) {
  // Keeping track of script loaded and error state
  const [state, setState] = useState({
    loaded: false,
    error: false
  });

  useEffect(
    () => {
      // If cachedScripts array already includes src that means another instance ...
      // ... of this hook already loaded this script, so no need to load again.
      if (cachedScripts.includes(src)) {
        setState({
          loaded: true,
          error: false
        });
      } else {
        cachedScripts.push(src);

        // Create script
        let script = document.createElement('script');
        script.src = src;
        script.async = true;

        // Script event listener callbacks for load and error
        const onScriptLoad = () => {
          setState({
            loaded: true,
            error: false
          });
        };

        const onScriptError = () => {
          // Remove from cachedScripts we can try loading again
          const index = cachedScripts.indexOf(src);
          if (index >= 0) cachedScripts.splice(index, 1);
          script.remove();

          setState({
            loaded: true,
            error: true
          });
        };

        script.addEventListener('load', onScriptLoad);
        script.addEventListener('error', onScriptError);

        // Add script to document body
        document.body.appendChild(script);

        // Remove event listeners on cleanup
        return () => {
          script.removeEventListener('load', onScriptLoad);
          script.removeEventListener('error', onScriptError);
        };
      }
    },
    [src] // Only re-run effect if script src changes
  );

  return [state.loaded, state.error];
}
