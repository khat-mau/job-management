import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
// <<<<<<< HEAD
import ManagerJobs from '../pages/manager/jobs/ManagerJobs';
import Header from '../components/layout/defaultLayout/header/Header';
import Footer from '../components/layout/defaultLayout/footer/Footer';
// =======
import ResetPassword from '../pages/resetPassword/ResetPassword';
import NewPassword from '../pages/newPassword/NewPassword';
import Detail from '../pages/detail/Detail';
import OwnInfor from '../pages/ownInfor/OwnInfor';
import ListCompany from '../pages/listCompany/ListCompany';
import Ban from '../pages/ban/Ban';
import RequestAll from '../pages/requestAll/RequestAll';
import ViewCandidate from '../pages/viewCandidate/ViewCandidate';
import ListCompanyWasDeleted from '../pages/listCompanyWasDeleted/ListCompanyWasDeleted';
// >>>>>>> 64d037264c95475c9bf318afb9979c4e4750edd8

const publicRoutes = [
    {path: '/requestAll', component: RequestAll},
    {path: '/viewCandidate', component: ViewCandidate},
    {path: '/resetPassword', component: ResetPassword},
    {path: '/newPassword', component: NewPassword},
    {path: '/detail', component: Detail},
    {path: '/ownInfor', component: OwnInfor},
    {path: '/listCompany', component: ListCompany},
    {path: '/listWasdeleted', component: ListCompanyWasDeleted},
    {path: '/ban', component: Ban},
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
