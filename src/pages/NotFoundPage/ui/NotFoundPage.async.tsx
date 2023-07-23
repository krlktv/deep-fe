import { FC, LazyExoticComponent, lazy } from 'react';

export const NotFoundPageAsync: LazyExoticComponent<FC> = lazy(() => import('./NotFoundPage'));
