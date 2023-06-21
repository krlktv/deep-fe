import { FC, LazyExoticComponent, lazy } from 'react';

export const MainPageAsync: LazyExoticComponent<FC> = lazy(
  () => import('./MainPage')
);
