import Footer from './components/layout/defaultLayout/footer/Footer';
import Header from './components/layout/defaultLayout/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/router.js';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component; //JSX
                        const check = route.path === '/*';
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <>
                                        {!check && <Header />}
                                        <Page />
                                        {!check && <Footer />}
                                    </>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </>
    );
}

export default App;
