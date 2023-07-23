import { FC, LazyExoticComponent, lazy } from 'react';

export const AboutPageAsync: LazyExoticComponent<FC> = lazy(() => import('./AboutPage'));
