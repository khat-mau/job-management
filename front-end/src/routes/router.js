import Home from '../pages/home/Home';
import Error from '../pages/error/Error';

import ManagerJobs from '../pages/manager/jobs/ManagerJobs';
import Header from '../components/layout/defaultLayout/header/Header';

import ResetPassword from '../pages/resetPassword/ResetPassword';
import NewPassword from '../pages/newPassword/NewPassword';
import Detail from '../pages/detail/Detail';
import OwnInfor from '../pages/ownInfor/OwnInfor';
import ListCompany from '../pages/listCompany/ListCompany';
import Ban from '../pages/ban/Ban';
import RequestAll from '../pages/requestAll/RequestAll';
import ViewCandidate from '../pages/viewCandidate/ViewCandidate';
import ListCompanyWasDeleted from '../pages/listCompanyWasDeleted/ListCompanyWasDeleted';
import { admin, user } from './role';

const publicRoutes = [
    { path: '/request-all', component: RequestAll },
    { path: '/view-candidate', component: ViewCandidate },
    { path: '/reset-password', component: ResetPassword },
    { path: '/new-password', component: NewPassword },
    { path: '/own-infor', component: OwnInfor },
    { path: '/list-company', component: ListCompany },
    { path: '/list-wasdeleted', component: ListCompanyWasDeleted },
    { path: '/ban', component: Ban },
    { path: '/', component: Home },
    {
        path: '/manage/jobs',
        component: ManagerJobs,
        layout: Header,
    },
    { path: '/*', component: Error, layout: null },
];

const privateRoutes = [
    { path: '/detail', component: Detail, acceptAccess: [admin, user] },
];

export { publicRoutes, privateRoutes };
