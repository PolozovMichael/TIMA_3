import { Navigate, Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../data/routes";

const Router = () => {
  // const { isAuth } = useAppSelector((state) => state.auth);
  const isAuth = true;

  return (
    <Routes>
      {
        isAuth
          ? privateRoutes.map(({
            path,
            component,
          }) => {
            return (
              <Route
                key={path}
                element={component}
                path={path}
              />
            );
          })
          : publicRoutes.map(({
            path,
            component,
          }) => {
            return (
              <Route
                key={path}
                element={component}
                path={path}
              />
            );
          })
      }
      <Route
        path="*"
        element={(
          <Navigate
            to="/home"
            replace
          />
        )}
      />

    </Routes>
  );
}

export default Router;
