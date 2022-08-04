import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';
import { BiFirstPage, BiLastPage, BiPin } from 'react-icons/bi';
const requestes = [
    {
        ID: '1',
        name: 'FPT',
        category: 'jober',
        href: '#',
        note: '',
    },
    {
        ID: '1',
        name: 'FPT',
        category: 'jober',
        href: '#',
        note: '',
    },
    {
        ID: '1',
        name: 'FPT',
        category: 'jober',
        href: '#',
        note: '',
    },
    {
        ID: '1',
        name: 'FPT',
        category: 'jober',
        href: '#',
        note: '',
    },
];

const RequestAll = () => {
    return (
        <Wrapper className=""
            content="flex  flex-col">
            <div className=" flex justify-center  w-full px-[10px] md:px-0 py-[20px]">

                <Search dataFilters={[]} />
                <Button className="h-[50px]"> Search </Button>
            </div>
            <h1 className="text-[#0C3078] text-[30px] font-bold px-[10px] md:px-0">List request company : </h1>



            <div className="w-full px-[10px] md:px-0 py-[10px] text-center flex flex-col">
                <div className="flex  text-[8px] md:text-[16px] py-[10px]">
                    <div className="pr-[5px] "><Button className="bg-[#507FC6]  w-[60px] md:w-[100px]"> Accepts</Button> </div>
                    <div className=""> <Button className="bg-[#E30E0E]  w-[60px] md:w-[100px]"> Rejects</Button></div>
                </div>
                <table className="text-[8px] md:text-[16px] font-bold  border border-slate-200 min-w-[360px] md:w-full">
                    <thead>
                        <tr className="bg-[#000080] text-white h-[50px]">
                            <th className="px-[5px]"><input type="checkbox" className="default:ring-2" /></th>
                            <th className="">ID</th>
                            <th className=" ">Name</th>
                            <th className="">Category</th>
                            <th className=" ">View</th>
                            <th className=" ">Accept</th>
                            <th className="">Reject</th>
                            <th className="">Note</th>
                            <th className=""> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {requestes.map((request, index) => (
                            <tr className="h-[40px]  md:h-[70px]" key={index}>
                                <td className=" "><input type="checkbox" className="default:ring-2" /></td>
                                <td className=" ">{request.ID}</td>
                                <td className=" ">{request.name}</td>
                                <td className=" ">{request.category}</td>
                                <td className="text-[#000080]"><div className="flex justify-center"><Button className="bg-[#00CE78]" to={request.href}> View</Button></div></td>
                                <td className=" py-[10px]"> <div className="flex justify-center"><Button className="bg-[#507FC6]"> Accept</Button> </div></td>

                                <td className="  "><div className="flex justify-center"> <Button className="bg-[#E30E0E] "> Reject</Button></div></td>
                                <td className="flex justify-center items-center py-[10px]"><div className="min-w-[70px] md:w-[250px] min-h-[50px] md:h-[96px] border-collapse border border-slate-500">{request.note}</div></td>
                                <td className=""><div className="flex justify-center"> <BiPin className="hover:bg-[#000080]" /></div></td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex flex-col items-center my-12">
                <div className="flex text-gray-700">
                    <div className="h-12 w-12 mr-1 flex justify-center items-center  cursor-pointer hover:bg-[#000070]">
                        <BiFirstPage className="w-6 h-6" />
                    </div>
                    <div className="flex h-12 font-medium  ">
                        <div className="w-12 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070]   ">1</div>
                        <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  hover:bg-[#000070] ">2</div>
                        <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  hover:bg-[#000070]  ">3</div>
                        <div className="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070] ">4</div>
                        <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in hover:bg-[#000070]  ">5</div>
                        <div className="w-12 flex justify-center items-center   cursor-pointer leading-5 transition duration-150 ease-in  ">...</div>
                        {/* <div class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div> */}
                    </div>
                    <div className="h-12 w-12 ml-1 flex justify-center items-center  cursor-pointer hover:bg-[#000070]">
                        <BiLastPage className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};

export default RequestAll;