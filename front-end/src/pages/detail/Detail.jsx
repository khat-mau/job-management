import Button from '../../components/button/Button';
import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Report from '../report/ReportDetailJob';
import { BiDollar, BiLike, BiDislike } from 'react-icons/bi';
import { FaStar } from "react-icons/fa";
import { HiLocationMarker } from 'react-icons/hi';
import { FaHourglassHalf } from 'react-icons/fa';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import * as detailJob  from '../../api/getListJobsCompany';

//code cứng, 

const comment = [
    {
        src: 'https://vcdn-sohoa.vnecdn.net/2022/06/06/elon-musk-2-9936-1639406089-92-2317-4748-1654522486.jpg',
        name: "Susan",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        src: 'https://vcdn-sohoa.vnecdn.net/2022/06/06/elon-musk-2-9936-1639406089-92-2317-4748-1654522486.jpg',
        name: "Susan",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
];
const detail = [
    { level: "University, more than 2 year working ", job: "Managerment, Fesher", salary: "1.000$", skill: "Soft skill, Tester, Developer" },
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
        src: 'https://afamilycdn.com/150157425591193600/2020/11/21/889982955072596699632224860037501977484047n-16059367271631424650700.jpg',
        job: 'Designer',
        money: '10-30 triệu',
        location: 'TP.HCM',
        date: '24/06/2022',
        href: "#",
    },
];



const Detail = () => {
    const [data, setData] = useState({});
    const [isReport, setReport] = useState(false);
    const {jobId} = useParams();
    const handleShowReport = () => {
        setReport(!isReport);

    };
    const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  };
  useEffect(()=>{
      async function fetch() {
          const result = await detailJob.detailJob(jobId);
          setData(result);
      }
      fetch();
  },[jobId]);
    return (
        <>
        <Wrapper className="w-full">
            <div className="flex flex-row w-full md:w-[75%] p-[20px] mx-auto">
                <Search filterSearch dataFilters={[' Location']} FilterSearchIcon={HiLocationMarker} />
                <Button className="h-[50px]"> Search </Button>
            </div>
            {latestjob2.map((job2, index) => (
                <div
                    className="mb-[40px] font-bold text-[10px] md:text-[20px] border-solid border-1 border-[#f0e3e3e7] flex flex-row justify-center  min-w-[300px] w-full  max-h-[200px]"
                    // to={job2.href}
                    key={index}
                >
                    <div className="basis-[30%] md:basis-[25%] inline" >
                        <img
                            src={job2.src}
                            alt=""
                            style={{ height: "100%", width: '100%', objectFit: 'cover' }}
                            className="object-contain"
                        />
                    </div>
                    <div className="p-auto md:p-[20px] basis-[50%] md:basis-[55%] pl-[5px] my-auto" >
                        <h1 className="">{job2.job}</h1>
                        <div className="flex flex-wrap py-[5px] md:py-[10px]">
                            <div className="flex py-[5px] md:py-[20px]">
                                <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                <span className="mr-5">{job2.money}</span>
                            </div>
                            <div className="flex py-[5px] md:py-[20px]">
                                <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                <span className="mr-5"> {job2.location}</span>
                            </div>
                            <div className="flex py-[5px] md:py-[20px]">
                                <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                <h1>{job2.date}</h1>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-[5px] font-[400]">
                            {latestjob2_request.map((requestjob, index3) => (
                                <div className="flex justify-center items-center border-2 border-[#999999BF] min-w-[45px] md:pl-0 " key={index3}>
                                    <span className="mx-auto md:mx-[30px]">{requestjob.request} </span>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="flex flex-col py-[7px] md:py-[20px] basis-[20%] items-center gap-3 h-fit my-auto">
                        <Button className="text-white font-bold whitespace-nowrap text-[10px] w-[60px] h-[15px]  md:w-[100px] md:h-[40px] md:text-[14px]">
                            <span>Post CV</span>
                        </Button>
                        <Button className="bg-[#00CE78] text-white font-bold whitespace-nowrap text-[10px] w-[60px] h-[15px] md:w-[100px] md:h-[40px] md:text-[14px]">
                            <span>Post CV</span>
                        </Button>
                        <Button className="bg-[#DC2C56] text-white font-bold whitespace-nowrap text-[10px] w-[60px] h-[15px]  md:w-[100px] md:h-[40px] md:text-[14px]"
                            onClick={() => {
                                setReport(true);
                            
                            }}
                        >
                            <span>Report</span>
                        </Button>
                    </div>
                </div>

            ))}
            {detail.map((val, key) => {
                return (
                    <div key={key} className='grid grid-cols-2 md:grid-cols-4 mb-4 px-4 gap-3 mx-auto border-y-2 border-gray-500 py-4'>
                        <div className='md:border-r-2 md:text-center border-gray-500'>
                            <h1 className=' font-bold text-[20px] mb-2 '>Level</h1>
                            <p className='text-gray-500 text-[15px]'>{val.level}</p>
                        </div>
                        <div className='md:border-r-2 md:text-center border-gray-500'>
                            <h1 className='font-bold text-[20px] mb-2'>Type of Job</h1>
                            <p className='text-gray-500 text-[15px]'>{val.job}</p>
                        </div>
                        <div className='md:border-r-2 md:text-center border-gray-500'>
                            <h1 className='font-bold text-[20px] mb-2'>Skill</h1>
                            <p className='text-gray-500 text-[15px]'>{val.skill}</p>
                        </div>
                        <div className='md:text-center border-gray-500'>
                            <h1 className='font-bold text-[20px] mb-2'>Salary</h1>
                            <p className='text-gray-500 text-[15px]'>{val.salary}</p>
                        </div>

                    </div>
                )
            })}
            {/* Mô tả và hình anh */}
            <div className='w-full bg-slate-500 text-center gap-2 md:px-0'>
                {/* Detail */}
                <div>
                    <p>Detail</p>
                </div>
            </div>
            {/* Bảng đánh giá vs khung bình luận */}
            <div className="flex flex-row w-full mt-4" >
                {/* Bang ratting  */}
                <div className='w-[30%] text-center border border-black rounded-lg mx-auto mr-3 max-h-full md:text-lg text-sm px-2'>
                    <div className='w-full flex flex-col justify-center py-7 gap-2'>
                        <h1 className='font-bold'>Customer Rating</h1>
                        <div className='flex flex-row mx-auto my-2'>
                            {stars.map((_,index)=>(
                                <FaStar className='h-5 w-5 md:h-7 md:w-7 pr-1' 
                                key={index}
                                onClick={()=> handleClick(index+1)}
                                onMouseOver={()=> handleMouseOver(index+1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) >index ?"orange":"#a9a9a9"                    
                                }
                                

                                />
                            ))
                                
                            
                                
                            }
                            
                        </div>
                        <div className='flex mx-auto gap-1 items-center'>
                            <p>{currentValue}/5</p>
                            <FaStar className='h-5 w-6 ' color='#FFBA5A' 
                            />
                        </div><p>In 169/196 People rating</p>
                    </div>
                </div>
                {/* Viet binh luan */}
                <div className='w-[70%] flex '>
                    <form className='w-full bg-white border-black border rounded-lg px-2'>
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <h2 className='px-4 pt-3 pb-2 text-gray-800 text-lg font-semibold'>Write a new comment</h2>
                            <div className='w-full md:w-full px-3 mb-2 mt-2'>
                                <textarea className='bg-gray-200 rounded border border-gray-400 leading-normal resize-y w-full h-[100px] py-2 px-3 font-medium placeholder-gray-700 focus:outline-none 
                                        focus:bg-white ' placeholder='Write Your Comment' required></textarea>
                            </div>
                            <div className='w-full flex md:w-full px-3 mr-1'>
                                <div className='ml-auto'>
                                    <Button className="h-1 min-w-max">Post Comment</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Danh sach binh luan */}

            {comment.map((val, key) => {
                return (
                    <div className='flex flex-row w-full my-7' >
                        
                        <div className='flex-row px-3 text-sm md:text-[20px]'>
                            <div key={key}>
                                <h1 className='font-bold text-2xl'>{val.name}</h1>
                                <p>{val.content}</p>
                                <div className='flex flex-row mx-auto pt-1 pl-3 gap-4'>
                                    <BiLike className='h-5 w-5' />
                                    <BiDislike className='h-5 w-5' />
                                </div>
                            </div>
                        </div>
                    </div>)
            })}
        </Wrapper>
        {isReport && (
            <div className="fixed top-[0]  z-50 bg-[#00000071] w-[100vw] h-[100vh]">
                <div
                    className="top-[50%] left-[50%] absolute w-[auto]"
                    style={{ transform: 'translate(-50%,-50%)' }}
                >
                    <Report                         
                        onShowReportDetail={handleShowReport}
                    />
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
export default Detail;
