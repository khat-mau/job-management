import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';
import{BiFirstPage,BiLastPage} from 'react-icons/bi';
import { Link } from 'react-router-dom';
const candies=[
    {
        ID:'1',
        name:'Trần Duy Thịnh',
        DateAdd:'20/04/2022',
        href:'#',

    },
    {
        ID:'1',
        name:'Trần Duy Thịnh',
        DateAdd:'20/04/2022',
        href:'#',

    },

    {
        ID:'1',
        name:'Trần Duy Thịnh',
        DateAdd:'20/04/2022',
        href:'#',

    },

    {
        ID:'1',
        name:'Trần Duy Thịnh',
        DateAdd:'20/04/2022',
        href:'#',

    },


];
const ViewCandidate = () => {
    return (
        <Wrapper className=""
            content="flex  flex-col"
        >
            <div className=" flex justify-center  w-full px-[10px] md:px-0 py-[20px]">

                <Search filterSearch dataFilters={['Date']} />
                <Button className="h-[50px]"> Search </Button>
            </div>

            <div className="w-full px-[30px] md:px-[150px] py-[20px] text-center flex justify-center ">
                <table className=" table-auto text-[8px] md:text-[16px] font-bold  border border-slate-200 min-w-[360px] md:w-[800px]">
                    <thead>
                        <tr className="bg-[#000080] text-white h-[50px]">
                            <th className="">ID</th>
                            <th className=" ">Name</th>
                            <th className="">Date add</th>
                            <th className=" ">View CV</th>
                            <th className=" ">Report</th>
                            <th className="">Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="h-[40px]  md:h-[70px]">
                            <td className=" ">1</td>
                            <td className=" ">Trần Duy Thịnh</td>
                            <td className=" ">20/04/2022</td>
                            <td className="text-[#000080]"><Link  to="#">View</Link></td>
                            <td className=" py-[10px]"> <div className="flex justify-center"><Button2 className="bg-[#DC2C56]"> Report</Button2> </div></td>

                            <td className="  "><div className="flex justify-center"> <Button2 className="bg-[#DC2C56] "> Reject</Button2></div></td>
                            
                        </tr> */}
                        {candies.map((candy,index)=>(
                            <tr className="h-[40px]  md:h-[70px]" key={index}>
                            <td className=" ">{candy.ID}</td>
                            <td className=" ">{candy.name}</td>
                            <td className=" ">{candy.DateAdd}</td>
                            <td className="text-[#000080]"><Link  to={candy.href}>View</Link></td>
                            <td className=" py-[10px]"> <div className="flex justify-center"><Button className="bg-[#DC2C56]"> Report</Button> </div></td>

                            <td className="  "><div className="flex justify-center"> <Button className="bg-[#DC2C56] h-[20px] md:h-[35px] w-[40px] md:w-[100px]"> Reject</Button></div></td>
                            
                        </tr>

                        ))}

                        



                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center my-12">
    <div className="flex text-gray-700">
        <div className="h-12 w-12 mr-1 flex justify-center items-center  cursor-pointer hover:bg-[#000070]">
              <BiFirstPage className="w-6 h-6"/>            
        </div>
        <div className="flex h-12 font-medium  ">
            <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070]   ">1</div>
            <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  hover:bg-[#000070] ">2</div>
            <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  hover:bg-[#000070]  ">3</div>
            <div className="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070] ">4</div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070]  ">5</div>
            <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  ">...</div>
            {/* <div class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div> */}
        </div>
        <div className="h-12 w-12 ml-1 flex justify-center items-center  cursor-pointer hover:bg-[#000070]">
        <BiLastPage className="w-6 h-6"/>
        </div>
    </div>
</div>


        </Wrapper>

    );
};

export default ViewCandidate;