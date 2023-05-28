import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { useAppSelector } from "../../hooks/useAppSelector";
import { privateRoutes, publicRoutes } from "../data/routes";

const Router = () => {
  const location = useLocation();
  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      {publicRoutes.map(({
        path,
        component,
      }) => (
        <Route
          key={path}
          element={component}
          path={path}
        />
      ))}

      {isAuth && privateRoutes.map(({
        path,
        component,
      }) => (
        <Route
          key={path}
          element={component}
          path={path}
        />
      ))}

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
