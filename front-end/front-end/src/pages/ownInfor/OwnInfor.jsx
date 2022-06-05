import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';

const OwnInfor = () => {
    return (
        <Wrapper className="bg-white text-xs md:text-base"
            content=" flex justify-center ">
            <div className='w-full text-center items-center justify-center mb-20'>
                <div className='mx-auto mb-5 w-[83%] md:w-[90%] '>
                    <h1 className='mt-10 mb-7 font-bold text-left text-blue-600 text-2xl md:text-3xl'>Information of An:</h1>
                    <table class="table-auto border-collapse boder border-y-2 w-full text-left">
                        <tbody >
                            <tr className='boder border-b-2 h-[50px]'>
                                <td>Full name</td>
                                <td>Nguyễn Văn An</td>
                                <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td>Account name</td>
                                <td>an2301</td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td>Email</td>
                                <td>an217@gmail.com</td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td>Phone</td>
                                <td>0835489632</td>
                                <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td>Password</td>
                                <td>************</td>
                                <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='w-[83%] text-center mx-auto mb-7 md:w-[70%]'>
                    <h1 className='mb-5 font-bold text-center text-xl md:text-2xl'>Applied for a job at the company:</h1>
                    <div className='mb-7 '>
                        <table class="border-collapse border border-slate-400 w-full table-auto mb-40">
                            <thead>
                                <tr>
                                    <th class="border border-slate-300 h-[50px]">No</th>
                                    <th class="border border-slate-300 h-[50px]">The company</th>
                                    <th class="border border-slate-300 h-[50px]">Job</th>
                                    <th class="border border-slate-300 h-[50px]">submission date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-slate-300 h-[50px]">1</td>
                                    <td class="border border-slate-300 h-[50px]">Saigon Center</td>
                                    <td class="border border-slate-300 h-[50px]">Tester</td>
                                    <td class="border border-slate-300 h-[50px]">20/04/2022</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-300 h-[50px]">2</td>
                                    <td class="border border-slate-300 h-[50px]">HighTechnology</td>
                                    <td class="border border-slate-300 h-[50px]">Dev</td>
                                    <td class="border border-slate-300 h-[50px]">20/04/2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr className='boder border-b-2 border-black'/>
            </div>

        </Wrapper>

    );
};

export default OwnInfor;

