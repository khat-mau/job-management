import Wrapper from '../wrapper/Wrapper';
import { Link } from 'react-router-dom';

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
    return (
        <Wrapper
            className="bg-[#000070] h-[75px] mb-[100px] text-[#fff] p-[20px]"
            content="flex items-center h-[100%]"
        >
            <div
                className="text-[24px] mr-[50px]"
                style={{ fontFamily: "'Irish Grover', cursive" }}
            >
                Fast JOB
            </div>
            {pages.map((page, index) => (
                <Link
                    className="mr-[50px] text-[#ffffff] text-[15px]"
                    to={page.href}
                    key={index}
                >
                    {page.title}
                </Link>
            ))}
            <div className="ml-[auto]">
                {homeFeatures.map((homeFeature, index) => (
                    <Link
                        to={homeFeature.href}
                        className="ml-[25px]"
                        key={index}
                    >
                        {homeFeature.title}
                    </Link>
                ))}
            </div>
        </Wrapper>
    );
};

export default Header;
