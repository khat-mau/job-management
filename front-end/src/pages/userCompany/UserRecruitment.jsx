import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';
import { HiLocationMarker } from 'react-icons/hi';
import { BiFirstPage, BiLastPage, BiDollar } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as listJob from '../../api/jobServices';
const UserRecruitment = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [arrayPage, setArrayPage] = useState([]);

    useEffect(() => {
        async function fetch() {
            const result = await listJob.listJob(currentPage);
            if(result.errorStatus===false){
                const item = [];

                for(let i = 1; i <= result.data.toltalPage; i++){
                // console.log(i);
                 
                    item.push(i);
                }
                setArrayPage(item)
                setData(result);
            }
        }
        fetch();
    }, [currentPage]);
    return (
        <div>
            <Wrapper className=""
                content=""
            >
                <div className=" flex flex-row w-full md:w-[75%] px-[auto] md:px-[55px] py-[20px]">
                    <Search
                        dataFilters={[]}
                        placeholder="Search name job or categories"
                        width
                    />
                    <Button className="h-[50px]"> Search </Button>
                </div>
                <div className="grid grid-flow-row grid-cols-1 gap-x-1 md:gap-[50px] my-0 md:my-[50px] md:grid-cols-3 px-0 md:px-[20px]">
                    {data && data?.errorStatus === false && data.data.listJobWasFilter.map((job, index) => (
                        <Link className="font-bold text-[15px] md:text-[16px] border-solid border-b md:border-2 border-[#ebebebf8] hover:border-red-600 flex flex-row items-center w-full md:h-[150px] "
                            to={"/detail/" + job._id}
                            key={index}

                        >
                            <div className="basis-1/2" style={{ height: "100%" }}>
                                <img
                                    src={job.photo}
                                    alt=""
                                    style={{ height: "100%" }}
                                    className="object-cover"
                                />

                            </div>
                            <div className="flex flex-col basis-1/2 pl-0 md:pl-[20px] " >
                                <h1 className="text-[15px] md:text-[20px] text-center md:text-left pb-[10px] md:pb-[20px] w-[170px] md:w-[250px] truncate">
                                    {job.name}</h1>
                                <div className="flex  justify-center md:justify-start px-0 md:px-[5px]">
                                    <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]" />
                                    <h1>{job.location}</h1>
                                </div>
                                <div className="flex justify-center md:justify-start">
                                    <BiDollar className="w-[20px] md:w-[30px] h-[30px]" />
                                    <span className="my-[5px] mx-[10px] md:mx-[5px]">{job.salary}</span>
                                </div>

                            </div>

                        </Link>
                    ))}

                </div>
                <div className="flex flex-col items-center my-12">
                    <div className="flex text-gray-700">
                        {/* <div className="h-12 w-12 mr-1 flex justify-center items-center bg-gray-50 cursor-pointer hover:bg-[#000070]"
                    
                        >
                            <BiFirstPage className="w-6 h-6" />
                        </div> */}
                        <div className="flex h-12 font-medium  bg-gray-50">
                            {data.errorStatus === false && arrayPage.length >0 && arrayPage.map((page,index)=>{
                                if(currentPage === page ){
                                    return <div key = {index} className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in bg-[#000070] text-white   "
                                    
                                    >{page}</div>
                                }else{
                                    return <div key = {index} className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#c7c7cf]   "
                                        onClick={()=> setCurrentPage(page)}
                                        >{page}</div>
                                    }
                                
                            } )

                                
                            }

                            
                        </div>
                        {/* <div className="h-12 w-12 ml-1 flex justify-center items-center bg-gray-50 cursor-pointer hover:bg-[#000070]"
                         >
                            <BiLastPage className="w-6 h-6" />
                        </div> */}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};
export default UserRecruitment;

