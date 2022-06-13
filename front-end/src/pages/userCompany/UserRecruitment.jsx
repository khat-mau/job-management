import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import { HiLocationMarker } from 'react-icons/hi';
import { TiShoppingBag } from 'react-icons/ti';
import{BiFirstPage,BiLastPage} from 'react-icons/bi';
import { Link } from 'react-router-dom';
const companies = [
    {
        image: "https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif",
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',

    },
    {
        image: "https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif",
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',

    },
    {
        image: "https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif",
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',

    },
    {
        image: "https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif",
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',

    },
    {
        image: "https://k8m8a6e7.rocketcdn.me/wp-content/uploads/2021/09/og-social-java-logo.gif",
        name: 'SaiGon Center',

        location: 'TP.HCM',

        jobs: '6 job',
        href: '#',

    },

];
const UserRecruitment= () =>{
    return(
        <div> 
            <Link to="#" className="font-bold text-[#EC0F1CD4] flex justify-end text-[16px] md:text-[20px] underline underline-offset-2"> Create a profile</Link>
        <Wrapper className=""
            content=""
            >
            <h1 className="font-bold text-[20px] md:text-[26px] text-[#0C3078] py-[20px]">Recruitment news of An :</h1>
            <div className="grid grid-flow-row grid-cols-1 gap-x-1 md:gap-[50px] my-0 md:my-[50px] md:grid-cols-3 px-0 md:px-[20px]">
            {companies.map((company, index) => (
                    <Link className="font-bold text-[15px] md:text-[16px] border-solid border-b md:border-2 border-[#ebebebf8] hover:border-red-600 flex flex-row items-center w-full md:h-[150px]"
                        to={company.href}
                        key={index}

                    >
                        <div className="basis-1/2" style={{ height: "100%" }}>
                            <img
                                src={company.image}
                                alt=""
                                style={{ height: "100%" }}
                                className="object-cover"
                            />

                        </div>
                        <div className="flex flex-col basis-1/2 pl-0 md:pl-[20px]" >
                            <h1 className="text-[15px] md:text-[20px] text-center md:text-left pb-[10px] md:pb-[20px]">{company.name}</h1>
                            <div className="flex  justify-center md:justify-start px-0 md:px-[5px]">
                                <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                <h1>{company.location}</h1>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <TiShoppingBag className="w-[20px] md:w-[30px] h-[30px]" />
                                <span className="my-[5px] mx-[10px] md:mx-[5px]">{company.jobs}</span>
                            </div>

                        </div>

                    </Link>
                ))}

            </div>
            <div className="flex flex-col items-center my-12">
    <div className="flex text-gray-700">
        <div className="h-12 w-12 mr-1 flex justify-center items-center bg-gray-50 cursor-pointer hover:bg-[#000070]">
              <BiFirstPage className="w-6 h-6"/>            
        </div>
        <div className="flex h-12 font-medium  bg-gray-50">
            <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070]   ">1</div>
            <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  hover:bg-[#000070] ">2</div>
            <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  hover:bg-[#000070]  ">3</div>
            <div className="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070] ">4</div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070]  ">5</div>
            <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  ">...</div>
            {/* <div class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div> */}
        </div>
        <div className="h-12 w-12 ml-1 flex justify-center items-center bg-gray-50 cursor-pointer hover:bg-[#000070]">
        <BiLastPage className="w-6 h-6"/>
        </div>
    </div>
</div>
        </Wrapper>
            </div>
    );
};
export default UserRecruitment;