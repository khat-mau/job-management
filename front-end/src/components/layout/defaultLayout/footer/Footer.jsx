import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { GrGooglePlus } from 'react-icons/gr';
import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import images from '../../../../../src/assets/images';
import Wrapper from '../wrapper/Wrapper';

const Footer = () => {
    return (
        <Wrapper className=" bg-[#000080]  flex flex-col" content="p-[20px]">
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
                    <a className="mb-[10px]" href="#">
                        Fast Job Business
                    </a>
                    <a className="mb-[10px]" href="#">
                        Get the app
                    </a>
                    <a className="mb-[10px]" href="#">
                        About us
                    </a>
                    <a className="mb-[10px]" href="#">
                        Contact us
                    </a>
                </div>
                <div className="text-[14px] flex flex-col max-w-[200px]">
                    <span className="mb-[10px] flex items-center" href="#">
                        <BsFillTelephoneFill />
                        &ensp;Fast Job Business
                    </span>
                    <span className="mb-[10px] flex items-center" href="#">
                        <AiOutlineMail className="h-[16px] w-[16px]" />
                        &ensp;fastjob2022@gmail.com
                    </span>
                    <span className="mb-[10px] flex items-center" href="#">
                        <BiTimeFive className="h-[16px] w-[16px]" />
                        &ensp;Working time: 24/7
                    </span>
                    <span className="mb-[10px] flex items-center" href="#">
                        <AiOutlineHome className="min-h-[16px] min-w-[16px] mr-[8px]" />
                        Lot E2a-7, Road D1 Hi-Tech Park, Long Thanh My Ward,
                        City. Thu Duc, City. Ho Chi Minh
                    </span>
                </div>
                <div className="text-[14px] flex flex-col ">
                    <a className="mb-[10px]" href="#">
                        Blog
                    </a>
                    <a className="mb-[10px]" href="#">
                        Help and Support
                    </a>
                    <a className="mb-[10px]" href="#">
                        Affiliate
                    </a>
                    <a className="mb-[10px]" href="#">
                        Investors
                    </a>
                </div>
                <div className="text-[14px] flex flex-col ">
                    <a className="mb-[10px]" href="#">
                        Terms
                    </a>
                    <a className="mb-[10px]" href="#">
                        Privacy policy
                    </a>
                    <a className="mb-[10px]" href="#">
                        Cookie settings
                    </a>
                    <a className="mb-[10px]" href="#">
                        Accessibility statement
                    </a>
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
