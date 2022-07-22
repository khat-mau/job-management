import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';
import CreateCompany from './CreateCompany';
import { useState } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import { myCompanies } from '../../api/companyServices';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ListCompany = () => {
    const [isShowCreate, setIsShowCreate] = useState(false);
    const [listCompany, setListCompany] = useState();
    const user = useSelector((state) => state.auth.login.currentUser);
    const handleClose = () => {
        setIsShowCreate(false);
    };

    useEffect(() => {
        (async function fetch() {
            const result = await myCompanies({ userId: user._id });
            setListCompany(result);
        })();
    }, [isShowCreate]);

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
                        <Button
                            className="mb-[10px]"
                            onClick={() => setIsShowCreate(true)}
                        >
                            Create
                        </Button>
                        <table className="table-auto mx-auto w-full text-center justify-center text-xs md:text-lg border-b-2 border-black mb-3 ">
                            <thead>
                                <tr className="border-b-2 border-black ">
                                    <th></th>
                                    <th>ID</th>
                                    <th>Name Company</th>
                                    <th>Add Date</th>
                                    <th>Status</th>
                                    <th>View detail</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCompany &&
                                    listCompany.data.map((val, key) => {
                                        return (
                                            <tr className="h-16" key={key}>
                                                <td className="">
                                                    <input type="checkbox" />
                                                </td>
                                                <td>{key + 1}</td>
                                                <td>{val?.name}</td>
                                                <td>{val?.createdAt}</td>
                                                <td>{val?.status}</td>
                                                <td>
                                                    <div className="min-w-0 min-h-0 mr-0">
                                                        <Button className="text-white bg-[#00CE78] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                                            <span>View</span>
                                                        </Button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="min-w-0 min-h-0 mr-0">
                                                        <Button className="text-white bg-[#507FC6] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                                            <span>Update</span>
                                                        </Button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="min-w-0 min-h-0 mr-0">
                                                        <Button className="text-white bg-[#E30E0E] font-bold text-[10px] mb-[5px] min-w-[50px] mx-auto">
                                                            <span>Delete</span>
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
            <CreateCompany state={isShowCreate} onClose={handleClose} />
        </>
    );
};

export default ListCompany;
