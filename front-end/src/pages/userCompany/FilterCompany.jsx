import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';
import { BiDollar } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import { FaHourglassHalf } from 'react-icons/fa';
import { BsSuitHeart } from 'react-icons/bs';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { listjobsCompany } from '../../api/getListJobsCompany';
import { useSelector } from 'react-redux';

const latestjob = [
    {
        title: 'Jobs by Specialization',
        href: '#',
    },
    {
        title: ' Management jobs',
        href: '#',
    },
    {
        title: 'Part-time',
        href: '#',
    },
    {
        title: 'General Labor',
        href: {},
    },
];
const filterSalary = [
    {
        title: 'salary',
    },
    {
        title: 'salary',
    },
    {
        title: 'salary',
    },
    {
        title: 'salary',
    },
];
const latestjob2_request = [
    {
        request: 'English',
    },
    {
        request: 'English',
    },
    {
        request: 'English',
    },
];
const latestjob2 = [
    {
        src: 'data:image/png;base64,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',

        job: 'IT back-end',
        level: 'Senior',
        money: '10-30tr',
        location: 'TP.HCM',
        date: '24/06/2022',
        href: '#',
    },
];
const FilterCompany = () => {
    const [data, setData] = useState({});
    const user = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        async function fetch() {
            const result = await listjobsCompany('12345');
            setData(result);
        }
        fetch();
    }, []);

    return (
        <Wrapper className="px-[10px] md:px-0" content="">
            <h1 className="font-bold text-[20px] md:text-[30px] px-[auto] md:px-[55px] py-[20px]">
                Company: {data.data}
            </h1>
            <div className=" flex flex-row w-full md:w-[75%] px-[auto] md:px-[55px] py-[20px]">
                <Search
                    dataFilters={[]}
                    placeholder="Search name job or categories"
                    width
                />
                <Button className="h-[50px]"> Search </Button>
            </div>

            <div className="flex w-full h-[100px] px-[auto] md:px-[55px] py-[10px] font-bold">
                {/* <select className=" flex justify-between items-center px-[5px] border-2 w-[100px] h-[40px] mr-[10px]"> 
                <option>Salary</option>
                <option>Salary</option>
                <option>Salary</option>
                <span className="">v</span>
                 </select> */}
                <select className=" flex justify-between items-center px-[5px] border-2 w-[100px] h-[40px] mr-[10px]">
                    {filterSalary.map((salary, index) => (
                        <option className="" key={index}>
                            {salary.title}
                        </option>
                    ))}
                </select>
                <select className=" flex justify-between items-center px-[5px] border-2 w-[100px] h-[40px] mr-[10px]">
                    <option>Rate</option>
                </select>
                <select className=" flex justify-between items-center px-[5px] border-2 w-[100px] h-[40px] mr-[10px]">
                    <option>Location</option>
                </select>
            </div>

            <div className="flex my-2 font-bold py-[20px]">
                <h1 className="text-[30px]  mx-[auto] md:mx-[55px] ">
                    {' '}
                    Latest job
                </h1>

                <div className="hidden md:block my-[10px]">
                    <Link
                        className="text-[20px] text-[#2B138C] mr-[30px] underline underline-offset-1"
                        to="#"
                    >
                        {' '}
                        All
                    </Link>
                    {/* <a className="text-[20px]  mr-[30px]" href="#"> Jobs by Specialization</a>
                    <a className="text-[20px]  mr-[30px]" href="#"> Management jobs</a>
                    <a className="text-[20px] mr-[30px]" href="#"> Part-time</a>
                    <a className="text-[20px]  mr-[30px]" href="#"> General Labor</a> */}
                    {latestjob.map((latestjob, index) => (
                        <Link
                            className="text-[20px]  mr-[30px]"
                            to={latestjob.href}
                            key={index}
                        >
                            {latestjob.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="grid grid-flow-row gap-[50px] my-[50px] grid-cols-1 px-[10px] md:px-[55px]">
                {/* <div className="font-bold text-[10px] md:text-[20px] border-solid border-2 border-[#999999BF] hover:border-red-600 flex flex-row mx-auto w-[350px] md:w-[1250px]  md:h-[200px] "> 
                    <div className="pr-[15px] md:pr-0 basis-[30%]"> 
                    <img
                        src={images.company}
                        alt=""
                        width="275px"
                        height=""                                                           
                        />
                        </div>    
                        <div className="text-[16px] md:text-[20px] m-auto md:m-[10px] basis-[50%]" > 
                            <h1 className=""> Technology company</h1>
                            <h1 className=""> Designer</h1>
                            <div className="flex justify-between my-[10px] md:my-[20px]">
                                <div className="flex"> 
                                <BiDollar className="max-w-[30px] max-h-[30px] mt-[3px]"/>
                                <span className=""> 10-30 triệu</span>
                                    </div> 
                                    <div className="flex mb-auto md:mb-[10px] "> 
                            <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> TP.HCM</h1>
                            </div>
                            <div className="flex"> 
                            <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> 24/06/2022</h1>
                            </div> 
                            </div>
                            <div className="flex gap-2 mb-[5px] font-[400]"> 
                            <div className=" border-2 border-[#999999BF] min-w-[45px] pl-[1px] md:pl-0 "> 
                                <span className="text-center mx-auto md:mx-[30px]">English </span>
                            </div>
                            <div className=" border-2 border-[#999999BF] min-w-[45px] pl-[1px] md:pl-0"> 
                                <span className="text-center mx-auto md:mx-[30px]">Java </span>
                            </div>
                            <div className=" border-2 border-[#999999BF] min-w-[45px] pl-[1px] md:pl-0"> 
                                <span className="text-center mx-auto md:mx-[30px]">MySQL </span>
                            </div>
                            </div>
                            
                        </div>
                        <div className="mx-1 my-[10px] md:my-[30px] basis-[20%]"> 
                            <div className="flex justify-center bg-[#DC2C56] mb-auto md:mb-[10px] w-[150px] border-2 "> 
                            <MdOutlineReportGmailerrorred className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1 className="pl-[5px]">Report</h1>
                            </div>
                            <div className="flex justify-center bg-[#00CE78] mb-auto md:mb-[10px] w-[150px] border-2"> 
                            <BsSuitHeart className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1 className="pl-[5px]"> Follow</h1>
                            </div>                          
                        </div>

                    </div> */}
                {latestjob2.map((job2, index) => (
                    <Link
                        className="font-bold text-[10px] md:text-[20px] border-solid border-2 border-[#f0e3e3e7] hover:border-red-600 flex flex-row justify-center  min-w-[300px] w-full  max-h-[200px]"
                        to={job2.href}
                        key={index}
                    >
                        <div
                            className="basis-[30%] md:basis-[25%]"
                            style={{ height: '100%' }}
                        >
                            <img
                                src={job2.src}
                                alt=""
                                width="275px"
                                style={{ height: '100%' }}
                                className="object-cover"
                            />
                        </div>
                        <div className="p-auto md:p-[20px] basis-[50%] md:basis-[55%] pl-[5px]">
                            <h1 className="">{job2.job}</h1>
                            <h1 className="">{job2.level}</h1>
                            <div className="flex justify-between my-[10px] md:my-[20px]">
                                <div className="flex py-[5px] md:py-0">
                                    <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                    <span className="text-[10px] md:text-[20px]">
                                        {job2.money}
                                    </span>
                                </div>
                                <div className="flex py-[5px] md:py-0 ">
                                    <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                    <h1> {job2.location}</h1>
                                </div>
                                <div className="flex py-[5px] md:py-0">
                                    <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                    <h1>{job2.date}</h1>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-[5px] font-[400]">
                                {latestjob2_request.map(
                                    (requestjob, index3) => (
                                        <div
                                            className="flex justify-center items-center border-2 border-[#999999BF] min-w-[45px] md:pl-0 "
                                            key={index3}
                                        >
                                            <span className="mx-auto md:mx-[30px]">
                                                {requestjob.request}{' '}
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                        <div className=" py-auto md:py-[20px] basis-[20%]">
                            <div className="flex justify-center items-center bg-[#DC2C56] mb-auto md:mb-[10px] w-[60px] md:w-[150px] border-2">
                                <MdOutlineReportGmailerrorred className="max-w-[36px] max-h-[30px] mt-[3px] " />
                                <h1 className="pl-[5px]">Report</h1>
                            </div>
                            <div className="flex justify-center bg-[#00CE78] mb-auto md:mb-[10px] w-[60px] md:w-[150px] border-2">
                                <BsSuitHeart className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                <h1 className="pl-[5px]"> Follow</h1>
                            </div>
                            {user.role == 'user' && <div>ahihi</div>}
                        </div>
                    </Link>
                ))}
            </div>
        </Wrapper>
    );
};
export default FilterCompany;
