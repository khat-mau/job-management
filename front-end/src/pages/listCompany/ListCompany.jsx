import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';

const ShowListConpany = [
    { id: "1", company: "FPT Company", date: "06/06/2022", view: "view", update: "edit", delete: "delete" },
    { id: "1", company: "Microsoft", date: "06/06/2022", view: "view", update: "edit", delete: "delete" },
    { id: "1", company: "Alibaba", date: "06/06/2022", view: "view", update: "edit", delete: "delete" },
    { id: "1", company: "SpaceX", date: "06/06/2022", view: "view", update: "edit", delete: "delete" },
]

const ListCompany = () => {
    return (
        <Wrapper className="bg-[#EDEDED] w-full"
            content=" flex justify-center ">
            <div className='w-full '>
                {/* Tille */}
                <div className='md:w-[80%] w-full flex md:flex-row flex-col-reverse mx-auto mb-10 mt-7'>
                    <div className='text-center md:text-left  '>
                        <h1 className='text-3xl font-bold text-blue-500 pt-5' >List company :</h1>
                    </div>
                    <div className='items-center md:ml-auto' >
                        <Search ></Search>
                    </div>
                </div>

                <div >
                    <table class="table-auto mx-auto w-full md:w-[80%] text-center justify-center text-xs md:text-lg border-b-2 border-black mb-3">
                        <thead >
                            <tr className='border-b-2 border-black h-10'>
                                <th></th>
                                <th>ID</th>
                                <th>Name Company</th>
                                <th>Add Date</th>
                                <th>View detail</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody >
                            {ShowListConpany.map((val, key) => {
                                return (
                                    <tr className='h-16' key={key}>
                                        <td className=''><input type="checkbox" /></td>
                                        <td >{val.id}</td>
                                        <td >{val.company}</td>
                                        <td >{val.date}</td>
                                        <td>
                                            <div className='min-w-0 min-h-0 mr-0'>
                                                <Button className="text-white bg-[#00CE78] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                                    <span>{val.view}</span>
                                                </Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='min-w-0 min-h-0 mr-0'>
                                                <Button className="text-white bg-[#507FC6] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                                    <span>{val.update}</span>
                                                </Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='min-w-0 min-h-0 mr-0'>
                                                <Button className="text-white bg-[#E30E0E] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                                    <span>{val.delete}</span>
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>


        </Wrapper >

    );
};

export default ListCompany;