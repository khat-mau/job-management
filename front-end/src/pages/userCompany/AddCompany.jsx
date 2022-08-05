import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';
import { TiShoppingBag } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as listCompany  from '../../api/getListJobsCompany';

const AddCompany = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [arrayPage, setArrayPage] = useState([]);
    useEffect(() => {
        async function fetch() {
            const result = await listCompany.listCompany(currentPage) ;
            if(result.errorStatus===false){
                const item = [];

                for(let i = 1; i <= result.data.toltalPage; i++){
                // console.log(i);
                 
                    item.push(i);
                }
                setArrayPage(item);
                setData(result);
            }
        }
        fetch();
    }, [currentPage]);

    return (
        <Wrapper className="" content="flex flex-col">
            <div className="flex flex-row justify-center w-full p-[20px] md:p-[70px] mb-[40px] md:mb-0">
                <Search dataFilters={[]} placeholder={'Search companies...'} />
                <Button className="h-[50px]"> Search </Button>
            </div>

            {data && data?.errorStatus===false && <hr className="block md:hidden" />}
            <div className="grid grid-flow-row grid-cols-1 gap-0 md:gap-[50px] my-0 md:my-[50px] md:grid-cols-3 px-0 md:px-[20px]">
                { data && data?.errorStatus===false && data.data.listCompanyWasFilter.map((company, index) => (
                    <Link
                        className="font-bold text-[15px] md:text-[16px] border-solid border-b md:border-2 border-[#ebebebf8] hover:border-red-600 flex flex-row items-center w-full md:h-[150px]"
                        to={"/filter-jobs/"+ company._id}
                        key={index}
                    >
                        <div className="basis-1/2" style={{ height: '100%' }}>
                            <img
                                src={company.photo}
                                alt=""
                                style={{ height: '100%' }}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col basis-1/2 pl-0 md:pl-[20px]">
                            <h1 className="text-[15px] md:text-[20px] text-center md:text-left pb-[10px] md:pb-[20px] w-[170px] md:w-[250px] truncate">
                                {company.name}
                            </h1>
                            <div className="flex justify-center md:justify-start">
                                <TiShoppingBag className="w-[20px] md:w-[30px] h-[30px]" />
                                <span className="my-[5px] mx-[10px] md:mx-[5px]">
                                    {company.jobs.length} &nbsp;jobs
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col items-center my-12">
                <div className="flex text-gray-700">
                    
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
                    
                </div>
            </div>
        </Wrapper>
    );
};

export default AddCompany;
