import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import NewPassword from '../pages/newPassword/NewPassword';
import UserCompany from '../pages/userCompany/UserCompany';
import ManagerJobs from '../pages/manager/jobs/ManagerJobs';
import Header from '../components/layout/defaultLayout/header/Header';
import Footer from '../components/layout/defaultLayout/footer/Footer';


const publicRoutes = [
    {path: '/UserCompany', component: UserCompany},
    {path: '/resetPassword', component: ResetPassword},
    {path: '/NewPassword', component: NewPassword},
    { path: '/', component: Home },
    {
        path: '/manage/jobs',
        component: ManagerJobs,
        layout: Header,
    },
    { path: '/*', component: Error, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
