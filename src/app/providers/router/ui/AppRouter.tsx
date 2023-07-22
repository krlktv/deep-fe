import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>... Loading ...</div>}>
      <Routes>
        {
          // An array of values from the routeConfig is required to be passed as props to routes
        }
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} element={<div className='pageWrapper'>{element}</div>} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
