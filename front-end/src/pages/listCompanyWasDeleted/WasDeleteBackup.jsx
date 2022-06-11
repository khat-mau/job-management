import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';

const data = [
    { id: "U001", category: "job", name: "Fpt Conpany", deleteDate: "10/06/2022", info: "View", reason:"wrong format", delete: "Delete", restore: "Restore"},
    { id: "U002", category: "company", name: "Lua Ga Company", deleteDate: "10/06/2022", info: "View", reason:"wrong format", delete: "Delete", restore: "Restore" },
    { id: "U003", category: "job", name: "Lua Ga Company", deleteDate: "10/06/2022", info: "View", reason:"wrong format", delete: "Delete", restore: "Restore" },
    { id: "U004", category: "company", name: "Lua Ga Company", deleteDate: "10/06/2022", info: "View", reason:"wrong format", delete: "Delete", restore: "Restore" },
    { id: "U005", category: "job", name: "Lua Ga Company", deleteDate: "10/06/2022", info: "View", reason:"wrong format", delete: "Delete", restore: "Restore" },
]

function WasDeleted() {
    return (
        <Wrapper className="bg-[#EDEDED] w-full"
            content=" flex justify-center ">
            <div className='flex w-full'>
                <div className='flex flex-col justify-center w-full py-3 md:px-10 gap-3'>
                    <div className='flex w-full '>
                        <Search filterSearch dataFilters={'Date'} />
                    </div>
                    <div className='mr-auto text-lg text-[#0C3078] font-bold md:text-3xl'>
                        <h1>List company that was soft deleted: </h1>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <Button>Delete</Button>
                        <Button>Retore</Button>
                    </div>

                    <div className=''>
                        <table className='border border-collapse  border-black table-fixed mb-10 text-center w-full text-xs md:text-base'>
                            <thead className='bg-blue-800 h-auto text-white text-lg'>
                                <tr>
                                    <th className='border border-black px-2 py-2'>ID</th>
                                    <th className='border border-black px-2 py-2'></th>
                                    <th className='border border-black px-2 py-2'>Name</th>
                                    <th className='border border-black px-2 py-2'>Delete Date</th>
                                    <th className='border border-black px-2 py-2'>Information</th>
                                    <th className='border border-black px-2 py-2'>Reason</th>
                                    <th className='border border-black px-2 py-2'>Delete</th>
                                    <th className='border border-black px-2 py-2'>Restore</th>
                                </tr>
                            </thead>
                            <tbody >
                                {data.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td className='border border-black px-2 py-2'>{val.id}</td>
                                            <td className='border border-black px-2 py-2'>{val.category}</td>
                                            <td className='border border-black px-2 py-2'>{val.name}</td>
                                            <td className='border border-black px-2 py-2'>{val.deleteDate}</td>
                                            <td className='border border-black px-2 py-2'>
                                                <div><Button className='h-2 w-2 mx-auto'><span>{val.info}</span></Button></div>
                                            </td>
                                            <td className='border border-black px-2 py-2'>{val.reason}</td>
                                            <td className='border border-black px-2 py-2'>
                                                <div className='w-[40px] '><Button className='h-2 w-[40px] mx-auto'>{val.delete}</Button></div>
                                            </td>
                                            <td className='border border-black px-2 py-2'>
                                                <div className='w-[40px]'><Button className='px-0 py-0  mx-auto'><span>{val.restore}</span></Button></div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Wrapper>


    );
}
export default WasDeleted;