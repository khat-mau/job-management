import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import Search from '../../components/search/Search';
import { BiFirstPage, BiLastPage, BiPin } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import {
    acceptRequest,
    listRequestJobsAndCompanies,
    rejectRequest,
} from '../../api/adminService';
import { useSelector } from 'react-redux';

const RequestAll = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [requests, setRequests] = useState();
    const [changeState, setChangeState] = useState(false);

    useEffect(() => {
        (async function fetchApi() {
            const result = await listRequestJobsAndCompanies(
                {},
                user.accessToken,
            );
            setRequests(result);
        })();
    }, [changeState]);

    const handleAccept = (id) => {
        (async function fetchApi() {
            const result = await acceptRequest({ id }, user.accessToken);
            if (!result || result?.errorStatus === true) {
                alert(result.message);
            } else {
                setChangeState(!changeState);
            }
        })();
    };
    const handleReject = (id) => {
        (async function fetchApi() {
            const result = await rejectRequest({ id }, user.accessToken);
            if (!result || result?.errorStatus === true) {
                alert(result.message);
            } else {
                setChangeState(!changeState);
            }
        })();
    };

    return (
        <Wrapper className="" content="flex  flex-col">
            <div className=" flex justify-center  w-full px-[10px] md:px-0 py-[20px]">
                <Search dataFilters={[]} />
                <Button className="h-[50px]"> Search </Button>
            </div>
            <h1 className="text-[#0C3078] text-[30px] font-bold px-[10px] md:px-0">
                List request company :{' '}
            </h1>

            <div className="w-full px-[10px] md:px-0 py-[10px] text-center flex flex-col">
                <table className="text-[8px] md:text-[16px] font-bold  border border-slate-200 min-w-[360px] md:w-full my-[20px]">
                    <thead>
                        <tr className="bg-[#000080] text-white h-[50px]">
                            <th className="px-[5px]">
                                <input
                                    type="checkbox"
                                    className="default:ring-2"
                                />
                            </th>
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
                        {requests &&
                            requests.errorStatus === false &&
                            requests.data.companies.map((company, index) => {
                                {
                                    return (
                                        <tr
                                            className="h-[40px]  md:h-[70px]"
                                            key={index}
                                        >
                                            <td className=" ">
                                                <input
                                                    type="checkbox"
                                                    className="default:ring-2"
                                                />
                                            </td>
                                            <td className=" ">{company._id}</td>
                                            <td className=" ">
                                                {company.name}
                                            </td>
                                            <td className=" ">Company</td>
                                            <td className="text-[#000080]">
                                                <div className="flex justify-center">
                                                    <Button
                                                        className="bg-[#00CE78]"
                                                        to={
                                                            '/view-request/' +
                                                            company._id
                                                        }
                                                    >
                                                        {' '}
                                                        View
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className=" py-[10px]">
                                                {' '}
                                                <div className="flex justify-center">
                                                    <Button
                                                        className="bg-[#507FC6]"
                                                        onClick={() =>
                                                            handleAccept(
                                                                company._id,
                                                            )
                                                        }
                                                    >
                                                        {' '}
                                                        Accept
                                                    </Button>{' '}
                                                </div>
                                            </td>

                                            <td className="  ">
                                                <div className="flex justify-center">
                                                    {' '}
                                                    <Button
                                                        className="bg-[#E30E0E] "
                                                        onClick={() =>
                                                            handleReject(
                                                                company._id,
                                                            )
                                                        }
                                                    >
                                                        {' '}
                                                        Reject
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="flex justify-center items-center py-[10px]">
                                                <div className="min-w-[70px] md:w-[250px] min-h-[50px] md:h-[96px] border-collapse border border-slate-500">
                                                    {''}
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="flex justify-center">
                                                    {' '}
                                                    <BiPin className="hover:bg-[#000080]" />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                        {requests &&
                            requests.errorStatus === false &&
                            requests.data.jobs.map((job, index) => {
                                {
                                    return (
                                        <tr
                                            className="h-[40px]  md:h-[70px]"
                                            key={index}
                                        >
                                            <td className=" ">
                                                <input
                                                    type="checkbox"
                                                    className="default:ring-2"
                                                />
                                            </td>
                                            <td className=" ">{job._id}</td>
                                            <td className=" ">{job.name}</td>
                                            <td className=" ">Job</td>
                                            <td className="text-[#000080]">
                                                <div className="flex justify-center">
                                                    <Button
                                                        className="bg-[#00CE78]"
                                                        to={
                                                            '/view-request/' +
                                                            job._id
                                                        }
                                                    >
                                                        {' '}
                                                        View
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className=" py-[10px]">
                                                {' '}
                                                <div className="flex justify-center">
                                                    <Button
                                                        className="bg-[#507FC6]"
                                                        onClick={() =>
                                                            handleAccept(
                                                                job._id,
                                                            )
                                                        }
                                                    >
                                                        {' '}
                                                        Accept
                                                    </Button>{' '}
                                                </div>
                                            </td>

                                            <td className="  ">
                                                <div className="flex justify-center">
                                                    {' '}
                                                    <Button
                                                        className="bg-[#E30E0E] "
                                                        onClick={() =>
                                                            handleReject(
                                                                job._id,
                                                            )
                                                        }
                                                    >
                                                        {' '}
                                                        Reject
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="flex justify-center items-center py-[10px]">
                                                <div className="min-w-[70px] md:w-[250px] min-h-[50px] md:h-[96px] border-collapse border border-slate-500">
                                                    {''}
                                                </div>
                                            </td>
                                            <td className="">
                                                <div className="flex justify-center">
                                                    {' '}
                                                    <BiPin className="hover:bg-[#000080]" />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
};

export default RequestAll;
