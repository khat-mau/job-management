import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';


const data = {
    fullName: "Nguyen Van A",
    username: "an2301",
    email: "an217@gmail.com",
    phone: "0835489632",
    password: "************",
}

const dataApllieTable = [
    { id: "1", company: "Saigon Center", job: "Tester", date: "20/04/2022" },
    { id: "2", company: "HighTechnology", job: "Dev", date: "20/04/2022" },
    { id: "2", company: "HighTechnology", job: "Dev", date: "20/04/2022" },
    { id: "2", company: "HighTechnology", job: "Dev", date: "20/04/2022" },
]

function OwnInfor() {
    return (
        <Wrapper className="bg-white text-xs md:text-base"
            content=" flex justify-center ">
            <div className='w-full text-center items-center justify-center mb-20'>
                <div className='mx-auto mb-5 w-[83%] md:w-[90%] '>
                    <h1 className='mt-10 mb-7 font-bold text-left text-blue-600 text-2xl md:text-3xl'>Information of An:</h1>
                    <table class="table-auto border-collapse boder border-y-2 w-full text-left">
                        <tbody>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>fullname:</td>
                               <td className='px-2 py-2'>{data.fullName}</td>
                               <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>UserName:</td>
                               <td className='px-2 py-2'>{data.username}</td>
                               <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>Email:</td>
                               <td className='px-2 py-2'>{data.email}</td>
                               <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>Phone:</td>
                               <td className='px-2 py-2'>{data.phone}</td>
                               <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                            <tr className='boder border-b-2 h-[50px]'>
                                <td className='px-2 py-2'>Password:</td>
                               <td className='px-2 py-2'>{data.password}</td>
                               <td><a className='text-blue-800 underline underline-offset-2' href="/">Edit</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='w-[83%] text-center mx-auto mb-7 md:w-[70%]'>
                    <h1 className='my-7 font-bold text-center text-xl md:text-2xl'>Applied for a job at the company:</h1>
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
                                {dataApllieTable.map((val, key) => {
                                    return (
                                        <tr className='boder border-b-2 h-[50px]' key={key}>
                                            <td class="border border-slate-300 h-[50px]">{val.id}</td>
                                            <td class="border border-slate-300 h-[50px]">{val.company}</td>
                                            <td class="border border-slate-300 h-[50px]">{val.job}</td>
                                            <td class="border border-slate-300 h-[50px]">{val.date}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr className='boder border-b-2 border-black' />
            </div>

        </Wrapper>

    );
}

export default OwnInfor;

