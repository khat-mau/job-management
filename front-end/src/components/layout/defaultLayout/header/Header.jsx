import Wrapper from '../wrapper/Wrapper';

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
                <a
                    className="mr-[50px] text-[#ffffff] text-[15px]"
                    href={page.href}
                >
                    {page.title}
                </a>
            ))}
            <div className="ml-[auto]">
                {homeFeatures.map((homeFeature, index) => (
                    <a href={homeFeature.href} className="ml-[25px]">
                        {homeFeature.title}
                    </a>
                ))}
            </div>
        </Wrapper>
    );
};

export default Header;
