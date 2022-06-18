import Wrapper from '../wrapper/Wrapper';
import Login from '../../../../pages/login/Login';
import Register from '../../../../pages/register/Register';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const pages = [
    {
        title: 'All jobs',
        href: '#',
    },
    {
        title: 'Companies',
        href: '#',
    },
    {
        title: 'Manage recruitment',
        href: '#',
    },
];

const Header = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [user, setUser] = useState(false);

    useEffect(() => {
        const menuIcon = document.querySelector('.menu');
        const sidebarMenu = document.querySelector('.status');
        const close = document.querySelector('.close');
        menuIcon.onclick = () => {
            sidebarMenu.style.display = 'flex';
        };

        close.onclick = () => {
            sidebarMenu.style.display = '';
        };
    }, []);

    const handleShowRegister = () => {
        setIsRegister(!isRegister);
    };

    const handleShowLogin = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <Wrapper
                className="bg-[#000070] h-[75px] text-[#fff] p-[20px] sticky top-0 z-[9999]"
                content="flex items-center h-[100%] "
            >
                <div
                    className="text-[24px] mr-[50px] shrink-0 select-none"
                    style={{ fontFamily: "'Irish Grover', cursive" }}
                >
                    Fast JOB
                </div>
                <div className="md:hidden right-[0] my-[auto] absolute menu cursor-pointer">
                    <HiMenu className="text-[25px]" />
                </div>
                <ul className="status md:static hidden  w-[300px] md:w-[100%] h-[100vh] md:h-[100%] top-[-20px] md:top-auto md:bg-transparent absolute right-[-20px] bg-[#000050] md:flex flex-col md:flex-row p-[15px] md:p-[0] md:items-center">
                    <div className="md:hidden close order-first">
                        <AiOutlineClose className="text-[#fff] text-[20px] ml-[95%] cursor-pointer" />
                    </div>
                    {pages.map((page, index) => (
                        <Link
                            className="md:mr-[50px] text-[#ffffff] text-[15px] my-[10px] md:m-0"
                            to={page.href}
                            key={index}
                        >
                            {page.title}
                        </Link>
                    ))}
                    <div className="md:ml-[auto] md:grow flex flex-col md:flex-row md:justify-end order-[-1] md:order-none">
                        {user ? (
                            <div className="flex  items-center mb-[20px] md:mb-0">
                                <img
                                    src="https://cdn.tecotecshop.com/assets/img/avatar-author.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                                <label className="ml-[10px] font-semibold">
                                    username
                                </label>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to=""
                                    className="md:ml-[25px] my-[10px]"
                                    onClick={() => {
                                        setIsLogin(true);
                                        setIsRegister(false);
                                    }}
                                >
                                    Sign in
                                </Link>
                                <Link
                                    to=""
                                    className="md:ml-[25px] my-[10px]"
                                    onClick={() => {
                                        setIsLogin(false);
                                        setIsRegister(true);
                                    }}
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>
                </ul>
            </Wrapper>
            {isLogin && (
                <div className="fixed top-[0]  z-50 bg-[#00000071] w-[100vw] h-[100vh]">
                    <div
                        className="top-[50%] left-[50%] absolute w-[auto]"
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <Login
                            onShowRegister={handleShowRegister}
                            onShowLogin={handleShowLogin}
                        />
                    </div>
                    <div
                        className="absolute w-[100%] h-[100%] -z-10"
                        onClick={() => {
                            setIsLogin(false);
                        }}
                    ></div>
                </div>
            )}
            {isRegister && (
                <div className="fixed top-[0]  z-50 bg-[#00000071] w-[100vw] h-[100vh]">
                    <div
                        className="top-[50%] left-[50%] absolute w-[auto]"
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <Register
                            onShowRegister={handleShowRegister}
                            onShowLogin={handleShowLogin}
                        />
                    </div>
                    <div
                        className="absolute w-[100%] h-[100%] -z-10"
                        onClick={() => {
                            setIsRegister(false);
                        }}
                    ></div>
                </div>
            )}
            {children}
        </>
    );
};

export default Header;
