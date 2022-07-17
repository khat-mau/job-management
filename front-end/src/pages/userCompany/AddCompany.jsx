import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';
// import images from '../../assets/images';
import { HiLocationMarker } from 'react-icons/hi';
import { TiShoppingBag } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const companies = [
    {
        image: 'https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif',
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',
    },
    {
        image: 'https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif',
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',
    },
    {
        image: 'https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif',
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',
    },
    {
        image: 'https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif',
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',
    },
    {
        image: 'https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif',
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',
    },
];

const AddCompany = () => {
    return (
        <Wrapper className="" content="flex flex-col">
            <diV className="flex flex-row justify-center w-full p-[20px] md:p-[70px] mb-[40px] md:mb-0">
                <Search dataFilters={[]} placeholder={'Search companies...'} />
                <Button className="h-[50px]"> Search </Button>
            </diV>

            {companies.length > 0 && <hr className="block md:hidden" />}
            <div className="grid grid-flow-row grid-cols-1 gap-0 md:gap-[50px] my-0 md:my-[50px] md:grid-cols-3 px-0 md:px-[20px]">
                {/* <div className="font-bold text-[15px] md:text-[20px] border-solid border-2 border-[#ebebebf8] hover:border-red-600 flex flex-row items-center w-full md:h-[200px]"> 
                    <div className="basis-1/2"> 
                    <img
                        src={images.company}
                        alt=""
                        width="275px"
                        height=""                                                           
                        />
                        
                        </div>                       
                        <div className="flex flex-col basis-1/2 " > 
                            <h1 className="text-[15px] md:text-[24px] text-center md:text-left pb-[10px] md:pb-[20px]">Saigon Center</h1>
                            <div className="flex  justify-center md:justify-start px-0 md:px-[5px]"> 
                            <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> TP.HCM</h1>
                            </div>
                            <div className="flex px-[27px] md:px-0"> 
                                <TiShoppingBag className="w-[20px] md:w-[30px] h-[30px]"/>
                                <span className="my-[5px] md:my-0 mx-[5px]">6 job</span>
                            </div>                          
                            
                        </div>

                    </div> */}
                {companies.map((company, index) => (
                    <Link
                        className="font-bold text-[15px] md:text-[16px] border-solid border-b md:border-2 border-[#ebebebf8] hover:bg-gray-500 flex flex-row items-center w-full md:h-[150px]"
                        to={company.href}
                        key={index}
                    >
                        <div className="basis-1/2" style={{ height: '100%' }}>
                            <img
                                src={company.image}
                                alt=""
                                style={{ height: '100%' }}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col basis-1/2 pl-0 md:pl-[20px]">
                            <h1 className="text-[15px] md:text-[20px] text-center md:text-left pb-[10px] md:pb-[20px]">
                                {company.name}
                            </h1>
                            <div className="flex  justify-center md:justify-start px-0 md:px-[5px]">
                                <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                <h1>{company.location}</h1>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <TiShoppingBag className="w-[20px] md:w-[30px] h-[30px]" />
                                <span className="my-[5px] mx-[10px] md:mx-[5px]">
                                    {company.jobs}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div class="flex flex-col items-center my-12">
                <div class="flex text-gray-700">
                    <div class="h-12 w-12 mr-1 flex justify-center items-center bg-gray-50 cursor-pointer hover:bg-[#000070]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-chevron-left w-6 h-6"
                        >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                    <div class="flex h-12 font-medium  bg-gray-50">
                        <div class="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070]   ">
                            1
                        </div>
                        <div class="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  hover:bg-[#000070] ">
                            2
                        </div>
                        <div class="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  hover:bg-[#000070]  ">
                            3
                        </div>
                        <div class="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070] ">
                            4
                        </div>
                        <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070]  ">
                            5
                        </div>
                        <div class="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  ">
                            ...
                        </div>
                        {/* <div class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div> */}
                    </div>
                    <div class="h-12 w-12 ml-1 flex justify-center items-center bg-gray-50 cursor-pointer hover:bg-[#000070]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-chevron-right w-6 h-6"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default AddCompany;
