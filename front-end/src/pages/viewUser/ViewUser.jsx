import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import { Link } from 'react-router-dom';
const ViewUser = () => {
    return (
        <Wrapper className=""
            content=""
        >
            <h1 className="text-[#000080] font-bold text-[25px] md:text-[30px] px-[30px] md:px-[175px] py-[30px]">Information of An: </h1>

            <div className="w-full  flex justify-center py-[20px]">
                <table class="text-[16px] font-bold md:text-[25px] min-w-[360px] md:w-[996px] ">
                    <tbody>
                        <tr className="border-solid border-y-2 border-[#ebebebf8] h-[40px]  md:h-[70px]" >
                            <td>Full name</td>
                            <td>Nguyễn Văn An</td>
                            <td className="text-[#5454EE]">Edit</td>
                        </tr>
                        <tr className="border-solid border-y-2 border-[#ebebebf8] h-[40px]  md:h-[70px]">
                            <td>Account name</td>
                            <td>an2301</td>

                        </tr>
                        <tr className="border-solid border-y-2 border-[#ebebebf8] h-[40px]  md:h-[70px]">
                            <td>Email</td>
                            <td>an217@gmail.com</td>
                        </tr>
                        <tr className="border-solid border-y-2 border-[#ebebebf8] h-[40px]  md:h-[70px]">
                            <td>Phone</td>
                            <td>0835489632</td>
                            <td className="text-[#5454EE]">Edit</td>
                        </tr>
                        <tr className="border-solid border-y-2 border-[#ebebebf8] h-[40px]  md:h-[70px]">
                            <td>Password </td>
                            <td>************</td>
                            <td className="text-[#5454EE]"> <Link to="#"> Edit</Link></td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <h1 className="font-bold text-[25px] md:text-[30px] text-center py-[20px]"> Applied for a job at the company:</h1>

            <div className="w-full px-[30px] md:px-[150px] py-[20px] text-center flex justify-center ">
                <table class=" text-[10px] md:text-[16px] font-bold border-collapse border border-slate-500 min-w-[360px] md:w-[800px]">
                    <thead>
                        <tr>
                            <th class="border border-slate-600">No</th>
                            <th class="border border-slate-600 ">The company</th>
                            <th class="border border-slate-600">Job</th>
                            <th class="border border-slate-600 ">submission date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-[40px]  md:h-[70px]">
                            <td class="border-r border-slate-700 ">1</td>
                            <td class="border-r border-slate-700 ">Saigon Center</td>
                            <td class="border-r border-slate-700 ">Tester</td>
                            <td class="border-r border-slate-700 ">20/04/2022</td>
                        </tr>
                        <tr className="h-[40px]  md:h-[70px]">
                            <td class="border-r border-slate-700 ">1</td>
                            <td class="border-r border-slate-700 ">Saigon Center</td>
                            <td class="border-r border-slate-700 ">Tester</td>
                            <td class="border-r border-slate-700 ">20/04/2022</td>
                        </tr>
                        <tr className="h-[40px]  md:h-[70px]">
                            <td class="border-r border-slate-700 ">1</td>
                            <td class="border-r border-slate-700 ">Saigon Center</td>
                            <td class="border-r border-slate-700 ">Tester</td>
                            <td class="border-r border-slate-700 ">20/04/2022</td>
                        </tr>


                    </tbody>
                </table>
            </div>








        </Wrapper>
    );
};
export default ViewUser;