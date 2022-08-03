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
import FilterCompany from '../pages/userCompany/FilterCompany';
import AdminCompany from '../pages/userCompany/AdminCompany';
import UserRecruitment from '../pages/userCompany/UserRecruitment';
import ListSearchJobs from '../pages/userCompany/ListSearchJobs';

import { admin, user } from './role';
import AddCompany from '../pages/userCompany/AddCompany';

const publicRoutes = [
    { path: '/request-all', component: RequestAll },
    { path: '/view-candidate', component: ViewCandidate },
    { path: '/reset-password', component: ResetPassword },
    { path: '/new-password', component: NewPassword },
    { path: '/own-infor', component: OwnInfor },
    { path: '/list-wasdeleted', component: ListCompanyWasDeleted },
    { path: '/filter-jobs/:companyId', component: FilterCompany },
    { path: '/admin-company', component: AdminCompany },
    { path: '/user-recruitment', component: UserRecruitment },
    { path: '/add-company', component: AddCompany },

    { path: '/list-search-jobs/:params', component: ListSearchJobs },
    { path: '/list-search-jobs/:name/:filter', component: ListSearchJobs },
    { path: '/ban', component: Ban },
    { path: '/', component: Home },
    { path: '/*', component: Error, layout: null },
];

const privateRoutes = [
    {
        path: '/list-company',
        component: ListCompany,
        acceptAccess: [admin, user],
    },
    {
        path: '/manage/jobs/:companyId',
        component: ManagerJobs,
        layout: Header,
        acceptAccess: [admin, user],
    },
    { path: '/detail', component: Detail, acceptAccess: [admin, user] },
];

export { publicRoutes, privateRoutes };
