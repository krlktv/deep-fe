import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {
          // An array of values from the routeConfig is required to be passed as props to routes
        }
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={<div className='pageWrapper'>{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
