import Wrapper from '../wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect } from 'react';

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

const homeFeatures = [
    {
        title: 'Sign up',
        href: '#',
    },
    {
        title: 'Sign in',
        href: '#',
    },
];

const Header = () => {
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

    return (
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
                <div className="md:hidden close">
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
                <div className="md:ml-[auto] md:grow flex flex-col md:flex-row md:justify-end">
                    {homeFeatures.map((homeFeature, index) => (
                        <Link
                            to={homeFeature.href}
                            className="md:ml-[25px] my-[10px]"
                            key={index}
                        >
                            {homeFeature.title}
                        </Link>
                    ))}
                </div>
            </ul>
        </Wrapper>
    );
};

export default Header;
