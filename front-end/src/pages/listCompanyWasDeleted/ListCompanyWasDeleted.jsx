import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Button2 from '../../components/button2/Button2';
import {AiOutlineDelete} from 'react-icons/ai';
const data = [
    { id: "U001", category: "job", name: "Fpt Conpany", deleteDate: "10/06/2022", hrefInfo: "#", reason: "wrong format", },
    { id: "U002", category: "company", name: "Lua Ga Company", deleteDate: "10/06/2022", hrefInfo: "#", reason: "wrong format", },
    { id: "U003", category: "job", name: "Lua Ga Company", deleteDate: "10/06/2022", hrefInfo: "#", reason: "wrong format", },
    { id: "U004", category: "company", name: "Lua Ga Company", deleteDate: "10/06/2022", hrefInfo: "#", reason: "wrong format", },
    { id: "U005", category: "job", name: "Lua Ga Company", deleteDate: "10/06/2022", hrefInfo: "#", reason: "wrong format", },
]

function WasDeleted() {
    return (
        <Wrapper className="bg-[#EDEDED] w-full px-[10px]"
            content=" flex flex-col justify-center ">
            <div className=" flex justify-center  w-full px-[10px] md:px-0 py-[20px]">
                <Search dataFilters={[]} />
                <Button2 className="h-[50px]"> Search </Button2>
            </div>
            <h1 className="text-[#0C3078] text-[30px] font-bold px-[10px] md:px-0">List company that was soft deleted:  </h1>

            <div className="w-full px-[10px] md:px-0 py-[10px] text-center flex flex-col">
                <div className="flex text-[8px] md:text-[16px] py-[10px]">
                    <div className="pr-[10px] "><Button2 className="bg-[#E30E0E] w-[60px] md:w-[100px]"><AiOutlineDelete/> Delete</Button2> </div>
                    <div className=""> <Button2 className="bg-[#507FC6]  w-[60px] md:w-[100px]">Restore</Button2></div>
                </div>
                <div class='py-[20px] overflow-auto ...'>
                    <table className="border-collapse text-[8px]  md:text-[16px] font-bold overflow-scroll w-full border border-slate-400 min-w-[360px] md:w-full">
                        <thead>
                            <tr className="bg-[#000080] text-white h-[50px]">
                                <th className="px-[5px]"><input type="checkbox" className="default:ring-2" /></th>
                                <th className="">ID</th>
                                <th className=" ">Category</th>
                                <th className="">Name</th>
                                <th className=" ">Delete Date</th>
                                <th className=" ">Information</th>
                                <th className="">Reason</th>
                                <th className="">Delete</th>
                                <th className="">Restore</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((wasDelete, index) => (
                                <tr className="h-[40px]  md:h-[70px]" key={index}>
                                    <td className=" "><input type="checkbox" className="default:ring-2" /></td>
                                    <td className=" ">{wasDelete.id}</td>
                                    <td className=" ">{wasDelete.category}</td>
                                    <td className=" ">{wasDelete.name}</td>
                                    <td className=" ">{wasDelete.deleteDate}</td>
                                    <td className="text-[#000080]"><div className="flex justify-center"><Button2 className="bg-[#00CE78]"> View</Button2></div></td>
                                    <td className=" ">{wasDelete.reason}</td>
                                    <td className=" py-[10px]"> <div className="flex justify-center"><Button2 className="bg-[#E30E0E]">Delete</Button2> </div></td>
                                    <td className="  "><div className="flex justify-center"> <Button2 className="bg-[#507FC6] ">Restore</Button2></div></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>


    );
}
export default WasDeleted;