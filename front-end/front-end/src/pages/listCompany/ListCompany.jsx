import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';

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
                    <div className='justify-items-center min-w-max md:ml-auto' >
                        <Search />
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
                            <tr className='h-16'>
                                <td className=''><input type="checkbox" /></td>
                                <td>ID</td>
                                <td>FPT</td>
                                <td>25/06/2022</td>
                                <td>
                                    <Button className="text-white bg-[#00CE78] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                        <span>View</span>
                                    </Button>
                                </td>
                                <td>
                                    <Button className="text-white font-bold text-[10px] mb-[5px] min-w-[50px] md:mx-auto mr-1">
                                        <span>Update</span>
                                    </Button>
                                </td>
                                <td>
                                    <Button className="text-white bg-[#DC2C56] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                        <span>Delete</span>
                                    </Button>
                                </td>
                            </tr>
                            <tr className='h-16'>
                                <td className=''><input type="checkbox" /></td>
                                <td>ID</td>
                                <td>FPT</td>
                                <td>25/06/2022</td>
                                <td>
                                    <div className='min-w-0 min-h-0 mr-0'>
                                        <Button className="text-white bg-[#00CE78] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                            <span>View</span>
                                        </Button>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <Button className="text-white font-bold text-[10px] mb-[5px] min-w-[50px] md:mx-auto mr-1">
                                            <span>Update</span>
                                        </Button>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <Button className="text-white bg-[#DC2C56] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                            <span>Delete</span>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                            <tr className='h-16'>
                                <td className=''><input type="checkbox" /></td>
                                <td>ID</td>
                                <td>FPT</td>
                                <td>25/06/2022</td>
                                <td>
                                    <div className='min-w-0 min-h-0 mr-0'>
                                        <Button className="text-white bg-[#00CE78] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                            <span>View</span>
                                        </Button>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <Button className="text-white font-bold text-[10px] mb-[5px] min-w-[50px] md:mx-auto mr-1">
                                            <span>Update</span>
                                        </Button>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <Button className="text-white bg-[#DC2C56] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                            <span>Delete</span>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='md:w-[80%] w-full mx-auto text-center md:text-left'>
                    <Button className='text-white bg-[#00CE78] font-bold text-[10px] mb-[5px] min-w-[50px]'>
                        <span>Create</span>
                    </Button>
                </div>

            </div>


        </Wrapper >

    );
};

export default ListCompany;