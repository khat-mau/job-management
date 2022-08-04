import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Input from '../../components/input/Input';
import { useState } from 'react';
import { useEffect } from 'react';
import { getHistory } from '../../api/userServices';  //kiem tra duong link
import { useSelector } from 'react-redux';
import Report from '../report/ReportDetailJob';



const OwnInfor = ({ onShowLogin }) => {
    const [data, setData] = useState({}); // => tra ve errormessage and data (trong do data gom cac thuoc tinh) => check error status first => checker data (return data)
    const user = useSelector((state) => state.auth.login.currentUser);
    const [isReport, setReport] = useState(false);
    const handleShowReport = () => {
        setReport(!isReport);

    };

    useEffect(() => {
        async function fetch() {
            const result = await getHistory({ data: user._id });
            setData(result);
        }
        fetch();
    }, []);


    return (
        <Wrapper className="bg-white text-xs md:text-base"
            content=" flex justify-center ">
            <div className='w-full text-center items-center justify-center mb-20'>
                <div className='mx-auto mb-5 w-[83%] md:w-[90%] '>
                    <h1 className='mt-10 mb-7 font-bold text-left text-blue-600 text-2xl md:text-3xl'>Information of {user.firstName} {user.lastName} : {user.role === 'user' ? '(USER)' : 'ADMIN'}</h1>
                    <table className="table-auto border-collapse boder border-y-2 w-full text-left">
                        <tbody>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>Fullname:</td>
                                <td className='px-2 py-2'>{user.firstName} {user.lastName}</td>

                                <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>UserName:</td>
                                <td className='px-2 py-2'>{user.username}</td>
                                {/* <td className='px-2 py-2'> <Input>{user.username}</Input> </td> */}
                                <td><a className='text-blue-800 underline underline-offset-2 ' href="/">Edit</a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>Email:</td>
                                <td className='px-2 py-2'>{user.email}</td>
                                <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>Phone:</td>
                                <td className='px-2 py-2'>{user.phone}</td>
                                <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit </a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>Password:</td>
                                {/* <td className='px-2 py-2'>{user.password}</td> */}
                                <td className='px-2 py-2'>******</td>
                                <td><a className='text-blue-800 underline underline-offset-2' 
                                    onClick={() => {
                                        setReport(true);}}>Change password</a>
                                        </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='w-[83%] text-center mx-auto mb-7 md:w-[70%]'>
                    <h1 className='my-7 font-bold text-center text-xl md:text-2xl'>Applied for a job at the company:</h1>
                    <div className='mb-7 '>
                        <table className="border-collapse border border-slate-400 w-full table-auto mb-40">
                            <thead>
                                <tr className='boder border-b-2 h-[50px]'>
                                    <td className="border border-slate-300 h-[50px]">No</td>
                                    <td className="border border-slate-300 h-[50px]">The Company</td>
                                    <td className="border border-slate-300 h-[50px]">Job</td>
                                    <td className="border border-slate-300 h-[50px]">Submission date</td>
                                </tr>
                            </thead>
                            <tbody>

                                {user.cv.map((job, index) => (
                                    <tr key={index}>
                                        <th className="border border-slate-300 h-[50px]">{index}</th>
                                        <th className="border border-slate-300 h-[50px]">{job?.nameConpany}</th>
                                        <th className="border border-slate-300 h-[50px]">{job?.catagoryJob}</th>
                                        <th className="border border-slate-300 h-[50px]">{job?.submitDate}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr className='boder border-b-2 border-black' />
            </div>
            {isReport && (
            <div className="fixed top-[0]  z-50 bg-[#00000071] w-[100vw] h-[100vh]">
                <div
                    className="top-[50%] left-[50%] absolute w-[auto]"
                    style={{ transform: 'translate(-50%,-50%)' }}
                >
                    <Report                         
                        onShowReportDetail={handleShowReport}
                    />
                </div>
                <div
                    className="absolute w-[100%] h-[100%] -z-10"
                    onClick={() => {
                        setReport(false);
                    }}
                ></div>
            </div>
        )}
        </Wrapper>

    );
};

export default OwnInfor;