import Wrapper from '../wrapper/Wrapper';
import Login from '../../../../pages/login/Login';
import Register from '../../../../pages/register/Register';

import Reset from '../../../../pages/resetPassword/ResetPassword';
import NewPassword from '../../../../pages/newPassword/NewPassword';
import CompleteGmail from '../../../../pages/resetPassword/CompleteGmail';
import { Link, Navigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../../redux/apiRequest';
import { handleLogin, showLogin, hideLogin } from '../../../../redux/authSlice';

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
        href: '/list-company',
    },
];

const Header = ({ children }) => {
    const isLogin = useSelector((state) => state.auth.isShowLogin);
    const [isRegister, setIsRegister] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [isNewPass, setIsNewPass] = useState(false);
    const [isCompleteGmail,setCompleteGmail] = useState(false);
    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();

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
        dispatch(handleLogin());
    };
    const handleShowReset = () => {
        setIsReset(!isReset);
    };
    const handleShowNewPass=() =>{
        setIsNewPass(!isNewPass);
    };
    const handleShowCompleteGmail = () => {
        setCompleteGmail(!isCompleteGmail);
    };

    const handleLogout = () => {
        logoutUser(user.accessToken, dispatch);
    };
    // console.log(user);
    return (
        <>
            <Wrapper
                className="bg-[#000070] h-[75px] text-[#fff] p-[20px] sticky top-0 z-[9999]"
                content="flex items-center h-[100%] "
            >
                <Link

                    className="text-[24px] mr-[50px] shrink-0 select-none cursor-pointer"

                    style={{ fontFamily: "'Irish Grover', cursive" }}
                    to="/"
                >
                    Fast JOB
                </Link>
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
                            <>
                                <div className="flex  items-center mb-[20px] md:mb-0 cursor-pointer  pr-[30px] ">
                                    <img
                                        src={user.photo}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                    <label className="ml-[10px] font-semibold cursor-pointer">
                                        {user.lastName}
                                    </label>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to=""
                                    className="md:ml-[25px] my-[10px]"
                                    onClick={() => {
                                        dispatch(showLogin());
                                        setIsRegister(false);
                                        setIsReset(false);
                                        setIsNewPass(false);
                                        setCompleteGmail(false);
                                    
                                    }}
                                >
                                    Sign in
                                </Link>
                                <Link
                                    to=""
                                    className="md:ml-[25px] my-[10px]"
                                    onClick={() => {
                                        dispatch(hideLogin());
                                        setIsRegister(true);
                                        setIsReset(false);
                                        setIsNewPass(false);
                                        setCompleteGmail(false);
                                    }}
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>
                    {user && (
                        <div
                            className="cursor-pointer my-[10px]"
                            onClick={() => handleLogout()}
                        >
                            Logout
                        </div>
                    )}
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
                            onShowReset={handleShowReset}
                            onShowNewPass={handleShowNewPass}
                            onShowCompleteGmail= {handleShowCompleteGmail}
                            
                        />
                    </div>
                    <div
                        className="absolute w-[100%] h-[100%] -z-10"
                        onClick={() => {
                            dispatch(handleLogin());
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
                            onShowReset={handleShowReset}
                            onShowNewPass={handleShowNewPass}
                            onShowCompleteGmail= {handleShowCompleteGmail}
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
            {isReset && (
                <div className="fixed top-[0]  z-50 bg-[#00000071] w-[100vw] h-[100vh]">
                    <div
                        className="top-[50%] left-[50%] absolute w-[auto]"
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <Reset
                        onShowRegister={handleShowRegister}
                            onShowReset={handleShowReset}
                            onShowLogin={handleShowLogin}
                            onShowNewPass={handleShowNewPass}
                            onShowCompleteGmail= {handleShowCompleteGmail}
                        />
                    </div>
                    <div
                        className="absolute w-[100%] h-[100%] -z-10"
                        onClick={() => {
                            setIsReset(false);
                        }}
                    ></div>
                </div>
            )}
            {isNewPass && (
                <div className="fixed top-[0]  z-50 bg-[#00000071] w-[100vw] h-[100vh]">
                    <div
                        className="top-[50%] left-[50%] absolute w-[auto]"
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <NewPassword
                        onShowRegister={handleShowRegister}
                            onShowReset={handleShowReset}
                            onShowLogin={handleShowLogin}
                            onShowNewPass={handleShowNewPass}
                            onShowCompleteGmail= {handleShowCompleteGmail}
                        />
                    </div>
                    <div
                        className="absolute w-[100%] h-[100%] -z-10"
                        onClick={() => {
                            setIsNewPass(false);
                        }}
                    ></div>
                </div>
            )}
            {isCompleteGmail && (
                <div className="fixed top-[0]  z-50 bg-[#00000071] w-[100vw] h-[100vh]">
                    <div
                        className="top-[50%] left-[50%] absolute w-[auto]"
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <CompleteGmail
                        onShowRegister={handleShowRegister}
                            onShowReset={handleShowReset}
                            onShowLogin={handleShowLogin}
                            onShowNewPass={handleShowNewPass}
                            onShowCompleteGmail= {handleShowCompleteGmail}
                        />
                    </div>
                    <div
                        className="absolute w-[100%] h-[100%] -z-10"
                        onClick={() => {
                            setCompleteGmail(false);
                        }}
                    ></div>
                </div>
            )}
            {children}
        </>
    );
};

export default Header;
