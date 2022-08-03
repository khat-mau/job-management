import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import { useState } from 'react';
import * as reportService from '../../api/report';

const ReportDetailJob = ({ onShowReportDetail }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isWaitingResult, setIsWaitingResult] = useState(false);
    const [reportResult, setReportResult] = useState([]);
    const handleReport = (e) => {
        e.preventDefault();
        try {
            const report = {
                title,
                content,
            };

            const fetch = () => {
                setIsWaitingResult(true);
                const promise = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(reportService.report(report));
                    }, 2000);
                })
                    .then((data) => {
                        if (
                            !data.errorStatus &&
                            data.errorStatus !== undefined

                        ) {
                            onShowReportDetail(false);
                        }
                        setReportResult(data);
                    })
                    .catch((err) => console.log(err))
                    .finally(() => setIsWaitingResult(false));


            };
            fetch();


        } catch (err) {
            console.error(err);
        }
    };
    return (
        <Wrapper className=""
            content=" "
        >

            <div className="  bg-white  box-border min-w-[150px] md:w-[450px] min-h-[300px] md:h-[400px] px-[50px] md:px-[100px] drop-shadow-lg rounded-[10px] flex flex-col justify-center items-center text-black my-[150px] md:my-[200px]">

                <h2 className="text-[14px] md:text-[20px] font-bold w-full">Problems encountered:</h2>
                <input className=" my-[10px] bg-white text-[18px] md:text-[24px] border-collapse border border-slate-500  w-full" type="text"

                    onChange={(e) =>
                        setTitle(e.target.value)
                    }

                />
                <h1 className=" text-[14px] md:text-[20px] font-[700] my-[10px]  w-full">Specify details: </h1>
                <textarea defaultValue="" className="w-full min-h-[100px] md:h-[96px] border-collapse border border-slate-500" required

                    onChange={(e) =>
                        setContent(e.target.value)
                    }

                ></textarea>
                    {reportResult.errorStatus && (
                            <div className=" text-[red] text-center mt-[20px]">
                                {typeof reportResult.dataError
                                    .errorMessage === 'object'
                                    ? reportResult.dataError.errorMessage.join(
                                          ', ',
                                      )
                                    : reportResult.dataError.errorMessage}
                            </div>
                        )}
                <div className="flex justify-around  pt-[10px] md:pt-[30px]">

                    {!isWaitingResult ?(
                        <Button className="w-[100%] mx-[10px] font-bold h-[40px] md:h-auto text-[18px] md:text-[24px] text-center hover:bg-[#000050]"
                        onClick={(e)=> handleReport(e)}
                        >OK </Button>
                    ):
                    (
                        <Button className="w-[100%] mx-[10px] font-bold h-[40px] md:h-auto text-[18px] md:text-[24px] text-center hover:bg-[#000050] opacity-40"
                        disabled
                        >OK </Button>
                    )}    
                    <Button className="w-[100%] mx-[10px] bg-gray-700 font-bold h-[40px] md:h-auto text-[18px] md:text-[24px] text-center hover:bg-gray-600"
                        onClick={() => onShowReportDetail()}
                    >Cancel </Button>
                </div>





            </div>

        </Wrapper>
    )
}
export default ReportDetailJob;