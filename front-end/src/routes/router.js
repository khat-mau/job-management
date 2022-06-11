import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import RequestAll from '../pages/requestAll/RequestAll';
import ViewCandidate from '../pages/viewCandidate/ViewCandidate';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import NewPassword from '../pages/newPassword/NewPassword';
import AdCompany from '../pages/userCompany/AdCompany';
import UserRecruitment from '../pages/userCompany/UserRecruitment';
import FilterCompany from '../pages/userCompany/FilterCompany';
import ViewUser from '../pages/viewUser/ViewUser';
import ManagerJobs from '../pages/manager/jobs/ManagerJobs';
import Header from '../components/layout/defaultLayout/header/Header';
// import Footer from '../components/layout/defaultLayout/footer/Footer';


const publicRoutes = [
    {path: '/RequestAll', component: RequestAll},
    {path: '/ViewCandidate', component: ViewCandidate},
    {path: '/ViewUser', component: ViewUser},
    {path: '/AdCompany', component: AdCompany},
    {path: '/UserRecruitment', component: UserRecruitment},
    {path: '/FilterCompany', component: FilterCompany},
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
