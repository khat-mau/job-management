import Home from '../pages/home/Home';
import Error from '../pages/error/Error';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/*', component: Error, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
