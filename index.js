import { lazy } from 'react';

const Pages = lazy(() => import('./other'));
console.log(Pages);
