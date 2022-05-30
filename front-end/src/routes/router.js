import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import NewPassword from '../pages/newPassword/NewPassword';

const publicRoutes = [
    {path: '/resetPassword', component: ResetPassword},
    {path: '/NewPassword', component: NewPassword},
    { path: '/', component: Home },
    { path: '/*', component: Error, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
