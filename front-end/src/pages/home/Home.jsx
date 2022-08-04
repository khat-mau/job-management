import Button from '../../components/button/Button';
import images from '../../assets/images';
import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import { BiDollar } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import { FaHourglassHalf, FaBriefcase } from 'react-icons/fa';
import Search from '../../components/search/Search';
import * as listJob from '../../api/getHomeJob';
import * as listCompany from '../../api/getHomeJob';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
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
        href: '#',
    },
];

const Home = () => {
    const [job, setJob] = useState({});
    const [company, setCompany] = useState({});
    const navigate = useNavigate();
    //const { companyId } = useParams(); //take it from here
    //const user = useSelector((state) => state.auth.login.currentUser);
    const [count, setcount] = useState(1);


    useEffect(() => {
        async function fetch() {
            const result = await listJob.getListJob(count);
            setJob(result);
        }
        fetch();
    }, [count]);

    useEffect(() => {
        async function fetch() {
            const result = await listCompany.getListCompany('1');
            setCompany(result);
        }
        fetch();
    }, []);
    return (
        <>
            <div>
                <Wrapper
                    className="w-[100%] h-[40vw] "
                    content="flex  justify-between items-center h-[100%]"
                    style={{
                        backgroundImage: `url(${images.homeImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className=" flex flex-row w-full md:w-[75%] p-[20px]">
                        <Search
                            filterSearch
                            dataFilters={[' Location']}
                            FilterSearchIcon={HiLocationMarker}
                        />
                        <Button className="h-[50px]"> Search </Button>
                    </div>
                    <div className=" text-white hidden md:block  w-[25%] text-justify flex-col">
                        <p className="md:text-[24px] font-[1000] mb-[20px]">
                            {' '}
                            WELCOM TO FAST JOB
                        </p>

                        <h2 className="font-[500] text-[5px] md:text-[18px] ">
                            We bring the mission of not leaving anyone
                            unemployed, coming to this application, you can
                            freely search for a job you love and are suitable
                            for yourself. In addition, you can freely create
                            jobs for free, but must go through censorship.
                        </h2>
                        <Button href="" className="mt-[20px] font-[700]">
                            {' '}
                            MORE DETAILS ABOUT US{' '}
                        </Button>
                    </div>
                </Wrapper>
                <Wrapper>
                    <h1 className="text-[24px] md:text-[30px] font-bold my-2 mx-[auto] md:mx-[55px]">
                        Featured companies for you
                    </h1>

                    <div className="grid grid-flow-row grid-cols-2 gap-2 my-[50px] md:grid-cols-4 ">
                        {company?.errorStatus === false && company.data.listCompanyWasFilter.map((companys, index) => (
                            <div key={index}>
                                {index < 4 && (
                                    <div className="border-solid border-2 border-[#f0e3e3e7] hover:border-red-600 flex flex-col items-center mx-auto h-[200px] md:h-[250px] relative  w-[210px]"
                                    onClick={() => navigate("/filter-jobs/" + companys._id)}>
                                        <div style={{ height: "70%" }}>
                                            <img
                                                src={companys.photo}
                                                alt=""
                                                width="420px"
                                                style={{ height: "100%" }}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center mx-auto ">
                                            <span className="font-[700] w-full text-center">
                                                {companys.name}
                                            </span>
                                            <div className='flex flex-row font-[700] italic md:text-[16px] px-auto m-[5px] my-auto gap-2'>
                                                <div className=''><FaBriefcase/></div>
                                                {companys.jobs.length} positions left
                                            </div>
                                            {/* mo ta (hot, luong cao) */}
                                            <div className=" bg-[#f96B6B] w-[40px] h-[25px] absolute top-0 left-0">
                                                <span className="text-[15px] pl-[5px] text-white ">
                                                    Hot
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }

                            </div>
                        ))
                        }
                    </div>

                    <div className="flex my-2 font-bold">
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
                        {job?.errorStatus === false && job.data.listJobWasFilter.map((jobs, index) => (
                            <div
                                className="font-bold text-[10px] md:text-[20px] border-solid border-2 border-[#f0e3e3e7] hover:border-red-600 flex flex-row justify-center  min-w-[300px] w-full  max-h-[200px]"
                                to={jobs._id}
                                key={index}
                                onClick={() => navigate("/detail/" + jobs._id)}
                            >
                                <div className="basis-[30%] md:basis-[25%]" style={{ height: "100%" }}>
                                    <img
                                        //src={jobs.name}
                                        src={jobs.photo}
                                        alt=""
                                        width="275px"
                                        style={{ height: "100%" }}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-auto md:p-[20px] basis-[50%] md:basis-[55%] pl-[5px]" >
                                    <h1 className="">{jobs.name}</h1>
                                    <div className="flex py-[5px] md:py-[20px]">
                                        <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                        <span className="">{jobs.name}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-[5px] font-[400]">
                                        {job.data.listJobWasFilter.map((requestjob, index3) => (
                                            <div className="flex justify-center items-center border-2 border-[#999999BF] min-w-[45px] md:pl-0 " key={index3}>
                                                <span className="mx-auto md:mx-[30px]">{requestjob.required} </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className=" py-auto md:py-[20px] basis-[20%]">
                                    <div className="flex mb-auto md:mb-[10px] ">
                                        <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                        <h1> {jobs.name}</h1>
                                    </div>
                                    <div className="flex py-[5px] md:py-[20px]">
                                        <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                        <h1>{jobs.name}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='pagination flex flex-row gap-4 place-content-center'>
                        <button onClick={() => setcount(1)}>&laquo;</button>
                        <button onClick={() => setcount(1)}>1</button>
                        <button onClick={() => setcount(2)}>2</button>
                        <button onClick={() => setcount(3)}>3</button>
                        <button onClick={() => setcount(4)}>4</button>
                        <button onClick={() => setcount(5)}>5</button>
                        <button onClick={() => setcount('{job.data.toltalPage}')}>&raquo;</button>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};
export default Home;
