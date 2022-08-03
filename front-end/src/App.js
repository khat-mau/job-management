import { Fragment, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes/router.js';
import { useSelector } from 'react-redux';
import HeaderFooter from './components/layout/defaultLayout/header-footer/HeaderFooter';
import Auth from './routes/Auth.jsx';

function App() {
    const user = useSelector((state) => state.auth.login.currentUser);

    return (
        <>
            <Routes>
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = HeaderFooter;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    console.log(user);
                    const roles = route.acceptAccess;

                    return (
                        <Route
                            children
                            key={index}
                            path={route.path}
                            element={
                                roles.includes(user?.role) && user ? (
                                    <Layout>
                                        <Page />
                                    </Layout>
                                ) : (
                                    <Auth />
                                )
                            }
                        />
                    );
                })}
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = HeaderFooter;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
