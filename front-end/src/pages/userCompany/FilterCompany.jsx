import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';
import Report from '../report/ReportFilterJob';
import { BiDollar } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import { FaHourglassHalf } from 'react-icons/fa';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import * as listjobsCompany from '../../api/getListJobsCompany';
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

const FilterCompany = () => {
    const [data, setData] = useState([]);
    const user = useSelector((state) => state.auth.login.currentUser);
    const { companyId } = useParams(); // take a id of company here.
    const [isReport, setReport] = useState(false);
    const navigate = useNavigate();

    const handleShowReport = () => {
        setReport(!isReport);
    };

    useEffect(() => {
        async function fetch() {
            const result = await listjobsCompany.listjobsCompany(companyId);
            setData(result);
        }
        fetch();
    }, [companyId]);

    return (
        <>
            <Wrapper className="px-[10px] md:px-0" content="">
                <h1 className="font-bold text-[20px] md:text-[30px] px-[auto] md:px-[55px] py-[20px]">
                    Company:{' '}
                    {data &&
                        data.errorStatus === false &&
                        data.data.length > 0 &&
                        data.data[0].company.name}
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
                    <select className=" flex justify-between items-center px-[5px] border-2 w-[100px] h-[40px] mr-[10px]">
                        {filterSalary.map((salary, index) => (
                            <option className="" key={index}>
                                {salary.title}
                            </option>
                        ))}
                    </select>
                    <select className=" flex justify-between items-center px-[5px] border-2 w-[100px] h-[40px] mr-[10px]">
                        {filterSalary.map((salary, index) => (
                            <option className="" key={index}>
                                {salary.title}
                            </option>
                        ))}
                    </select>
                    <select className=" flex justify-between items-center px-[5px] border-2 w-[100px] h-[40px] mr-[10px]">
                        {filterSalary.map((salary, index) => (
                            <option className="" key={index}>
                                {salary.title}
                            </option>
                        ))}
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
                    {data?.errorStatus === false &&
                        data.data?.length > 0 &&
                        data.data.map((job, index) => (
                            <div
                                className="font-bold text-[10px] md:text-[20px] border-solid border-2 border-[#f0e3e3e7] hover:border-red-600 flex flex-row justify-center  min-w-[300px] w-full  max-h-[200px] relative"
                                key={index}
                            >
                                <div
                                    className="basis-[25%] md:basis-[25%]"
                                    style={{ height: '100%' }}
                                >
                                    <img
                                        src={job.photo}
                                        alt=""
                                        width="275px"
                                        style={{ height: '100%' }}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-auto md:p-[20px] basis-[50%] md:basis-[55%] pl-[5px]">
                                    <h1 className="">{job.name}</h1>
                                    <h1 className="">{job.level}</h1>
                                    <div className="flex justify-between my-[10px] md:my-[20px]">
                                        <div className="flex py-[5px] md:py-0">
                                            <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                            <span className="text-[10px] md:text-[20px]">
                                                {job.salary}
                                            </span>
                                        </div>
                                        <div className="flex py-[5px] md:py-0 ">
                                            <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                            <h1> {job.location}</h1>
                                        </div>
                                        <div className="flex py-[5px] md:py-0">
                                            <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                            <h1>
                                                {new Intl.DateTimeFormat(
                                                    'en-US',
                                                    {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: '2-digit',
                                                    },
                                                ).format(
                                                    new Date(
                                                        Date.parse(
                                                            job.updatedAt,
                                                        ),
                                                    ),
                                                )}
                                            </h1>
                                        </div>
                                    </div>

                                    {job.required && (
                                        <div className="flex flex-wrap gap-2 mb-[5px] font-[400]">
                                            <div className="flex justify-center items-center border-2 border-[#999999BF] min-w-[45px] md:pl-0 ">
                                                <span className="mx-auto md:mx-[30px]">
                                                    {job.required}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="absolute  w-full h-full "
                                    onClick={() =>
                                        navigate('/detail/' + job._id)
                                    }
                                ></div>
                                <div className="flex flex-col justify-center items-center py-auto md:py-[20px] basis-[20%] z-50">
                                    <Button
                                        className=" bg-[#DC2C56] hover:bg-red-700  w-[50px] md:w-[150px] h-[30px] md:h-[50px] border-2"
                                        onClick={() => {
                                            setReport(true);
                                        }}
                                    >
                                        Report
                                    </Button>
                                    <Button className="  bg-[#00CE78] hover:bg-green-900  w-[50px] md:w-[150px] h-[30px] md:h-[50px] border-2">
                                        Follow
                                    </Button>

                                    {user?.role === 'admin' && (
                                        <Button className=" w-[50px] md:w-[150px] h-[30px] md:h-[50px] border-2">
                                            Delete
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            </Wrapper>
            {isReport && (
                <div className="fixed top-[0]  z-50 bg-[#00000071] w-[100vw] h-[100vh]">
                    <div
                        className="top-[50%] left-[50%] absolute w-[auto]"
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <Report onShowReport={handleShowReport} />
                    </div>
                    <div
                        className="absolute w-[100%] h-[100%] -z-10"
                        onClick={() => {
                            setReport(false);
                        }}
                    ></div>
                </div>
            )}
        </>
    );
};
export default FilterCompany;
