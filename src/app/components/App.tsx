import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {
  store,
  persistor,
} from "../../redux";

import AppRouter from "./AppRouter";

import "../../styles/main.css";
import AppAside from "./AppAside";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppAside />
            <main>
              <AppRouter />
            </main>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
