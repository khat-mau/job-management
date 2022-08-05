import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { listCandidate } from '../../api/jobServices';
import { useSelector } from 'react-redux';

const ViewCandidate = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [listCv, setListCv] = useState();
    const { jobId } = useParams();

    useEffect(() => {
        (async function fetchApi() {
            const result = await listCandidate(
                { userId: user._id, jobId },
                user.accessToken,
            );
            if (result.errorStatus === false) {
                setListCv(result);
            }
        })();
    }, []);

    return (
        <Wrapper className="" content="flex  flex-col">
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
                        {listCv?.errorStatus === false &&
                            listCv?.data?.cvs?.length > 0 &&
                            listCv.data.cvs.map((cv, index) => (
                                <tr
                                    className="h-[40px]  md:h-[70px]"
                                    key={index}
                                >
                                    <td className=" ">{index + 1}</td>
                                    <td className=" ">
                                        {cv.user.firstName} {cv.user.lastName}
                                    </td>
                                    <td className=" ">{cv.createdAt}</td>
                                    <td className="text-[#000080]">
                                        <a href={cv.data} download>
                                            View
                                        </a>
                                    </td>
                                    <td className=" py-[10px]">
                                        {' '}
                                        <div className="flex justify-center">
                                            <Button className="bg-[#DC2C56]">
                                                {' '}
                                                Report
                                            </Button>{' '}
                                        </div>
                                    </td>

                                    <td className="  ">
                                        <div className="flex justify-center">
                                            {' '}
                                            <Button className="bg-[#DC2C56] ">
                                                {' '}
                                                Reject
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
};

export default ViewCandidate;
