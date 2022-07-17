import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';
import CreateCompany from './CreateCompany';

const ShowListConpany = [
    {
        id: '1',
        company: 'FPT Company',
        date: '06/06/2022',
        view: 'view',
        update: 'edit',
        delete: 'delete',
    },
];

const ListCompany = () => {
    return (
        <>
            <Wrapper className="w-full" content=" flex justify-center ">
                <div className="w-full ">
                    <div className="w-full flex md:flex-row flex-col-reverse mx-auto mb-10 mt-7 items-baseline">
                        <div className="text-center md:text-left  ">
                            <h1 className="text-3xl font-bold text-blue-500 pt-5">
                                List company :
                            </h1>
                        </div>

                        <Search className="md:ml-auto"></Search>
                    </div>
                    <div className="my-[75px] min-h-[500px]">
                        <Button className="mb-[10px]">Create</Button>
                        <table className="table-auto mx-auto w-full text-center justify-center text-xs md:text-lg border-b-2 border-black mb-3 ">
                            <thead>
                                <tr className="border-b-2 border-black ">
                                    <th></th>
                                    <th>ID</th>
                                    <th>Name Company</th>
                                    <th>Add Date</th>
                                    <th>View detail</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ShowListConpany.map((val, key) => {
                                    return (
                                        <tr className="h-16" key={key}>
                                            <td className="">
                                                <input type="checkbox" />
                                            </td>
                                            <td>{val.id}</td>
                                            <td>{val.company}</td>
                                            <td>{val.date}</td>
                                            <td>
                                                <div className="min-w-0 min-h-0 mr-0">
                                                    <Button className="text-white bg-[#00CE78] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                                        <span>{val.view}</span>
                                                    </Button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="min-w-0 min-h-0 mr-0">
                                                    <Button className="text-white bg-[#507FC6] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                                        <span>
                                                            {val.update}
                                                        </span>
                                                    </Button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="min-w-0 min-h-0 mr-0">
                                                    <Button className="text-white bg-[#E30E0E] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                                        <span>
                                                            {val.delete}
                                                        </span>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Wrapper>
            <CreateCompany />
        </>
    );
};

export default ListCompany;
