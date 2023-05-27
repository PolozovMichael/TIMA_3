import { lazy, Suspense } from "react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {
  store,
  persistor,
} from "../../redux";

import AppAside from "./AppAside/AppAside";

const LazyAppRouter = lazy(() => {
  return import("./AppRouter.tsx");
});


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppAside />
            <main>
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAppRouter />
              </Suspense>
            </main>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
