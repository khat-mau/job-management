import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { GrGooglePlus } from 'react-icons/gr';
import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import images from '../../../../../src/assets/images';
import Wrapper from '../wrapper/Wrapper';

const titles1 = [
    {
        title: 'Fast Job Business',
        href: '#',
    },
    {
        title: 'Get the app',
        href: '#',
    },
    {
        title: 'About us',
        href: '#',
    },
    {
        title: 'Contact us',
        href: '#',
    },
];

const titles2 = [
    {
        title: 'Fast Job Business',
        icon: <BsFillTelephoneFill />,
        href: '#',
    },
    {
        title: 'fastjob2022@gmail.com',
        icon: <AiOutlineMail className="h-[16px] w-[16px]" />,
        href: '#',
    },
    {
        title: 'Working time: 24/7',
        icon: <BiTimeFive className="h-[16px] w-[16px]" />,
        href: '#',
    },
    {
        title: (
            <span>
                Lot E2a-7, Road D1 Hi-Tech Park, Long Thanh My Ward,City. Thu
                Duc, City. Ho Chi Minh
            </span>
        ),
        icon: <AiOutlineHome className="min-h-[16px] min-w-[16px]" />,
        href: '#',
    },
];
const title3 = [
    {
        title: 'Blog',
        href: '#',
    },
    {
        title: 'Help and Support',
        href: '#',
    },
    {
        title: 'Affiliate',
        href: '#',
    },
    {
        title: 'Investors',
        href: '#',
    },
];
const titles4 = [
    {
        title: 'Terms',
        href: '#',
    },
    {
        title: 'Privacy policy',
        href: '#',
    },
    {
        title: 'Cookie settings',
        href: '#',
    },
    {
        title: 'Accessibility statement',
        href: '#',
    },
];

const Footer = () => {
    return (
        <Wrapper className=" bg-[#000070]" content="p-[20px]">
            <div className="text-[#fff] text-[24px] font-medium text-center mb-[15px]">
                KEEP IN TOUCH
            </div>
            <div className="flex justify-center items-center border-b pb-[25px] border-[rgba(255,255,255,0.5)]">
                <FaTwitter className="text-[#fff] w-[30px] h-[30px] mx-[15px]" />
                <BsInstagram className="text-[#fff] w-[30px] h-[30px] mx-[15px]" />
                <FaFacebookF className="text-[#fff] w-[25px] h-[25px] mx-[15px]" />
                <GrGooglePlus className="text-[#fff] w-[35px] h-[35px] mx-[15px]" />
            </div>
            <div className="flex grow text-[#fff] mt-[15px] justify-between flex-col  md:flex-row">
                <div className="text-[14px] flex flex-col ">
                    {titles1.map((title1, index) => (
                        <a className="mb-[10px]" href={title1.href} key={index}>
                            {title1.title}
                        </a>
                    ))}
                </div>
                <div className="text-[14px] flex flex-col max-w-[200px]">
                    {titles2.map((title2, index) => (
                        <span
                            className="mb-[10px] flex items-center "
                            href={title2.href}
                            key={index}
                        >
                            {title2.icon} &ensp;{title2.title}
                        </span>
                    ))}
                </div>
                <div className="text-[14px] flex flex-col ">
                    {title3.map((title3, index) => (
                        <a className="mb-[10px]" href={title3.href} key={index}>
                            {title3.title}
                        </a>
                    ))}
                </div>
                <div className="text-[14px] flex flex-col ">
                    {titles4.map((title4, index) => (
                        <a className="mb-[10px]" href={title4.href} key={index}>
                            {title4.title}
                        </a>
                    ))}
                </div>
                <div className="text-[14px] flex flex-col max-w-[260px] justify-between top-[0] right-[0] lg:static">
                    <img
                        src={images.certificate1}
                        alt=""
                        width="125"
                        height="45.73"
                    />
                    <img
                        src={images.certificate2}
                        alt=""
                        width="225px"
                        height="23.95px"
                    />
                    <span className="mb-[10px]" href="#">
                        Copyright © Ahihi personal Vietnam Joint Stock Company
                        2022
                    </span>
                </div>
            </div>
        </Wrapper>
    );
};

export default Footer;
