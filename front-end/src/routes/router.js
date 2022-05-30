import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import Login from '../pages/login/Login';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/', component: Login },
    { path: '/*', component: Error, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
