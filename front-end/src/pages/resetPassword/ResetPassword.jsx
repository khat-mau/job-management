import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as resetService from '../../api/reset';
import Input from '../../components/input/Input';

const ResetPassword = ({onShowLogin,onShowReset,onShowCompleteGmail}) => {
    const [email, setEmail] = useState('');
    const [isWaitingResult, setIsWaitingResult] = useState(false);
    const [resetResult, setResetResult] = useState([]);
    const handleReset = (e) => {
        e.preventDefault();
        try {
            const resetInfo = {
                email,
              
            };
            const fetch = () => {
                setIsWaitingResult(true);
                // Gọi api và chỉ định chờ 2 giây cho response
                const promise = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(resetService.resetPassword(resetInfo));
                    }, 2000);
                })
                    .then((data) => {
                        if (
                            !data.errorStatus &&
                            data.errorStatus !== undefined
                        ) {
                            onShowReset();
                            onShowCompleteGmail();
                        }
                        setResetResult(data);
                    })
                    .catch((err) => console.log(err))
                    .finally(() => setIsWaitingResult(false));
            };
            fetch();
        } catch (err) {
            console.log(err);
        }
    };

    return (
       <Wrapper className=""
                content=" flex justify-center   "
       >
           <div className="  bg-white  box-border min-w-[350px] md:w-[500px] min-h-[450px] md:h-[600px] px-[50px] md:px-[100px] drop-shadow-lg rounded-[10px] flex flex-col text-black mx-[40px] my-[150px] md:my-[200px]">  
                <h1 className=" text-[30px] md:text-[35px] font-[700] py-[30px] md:py-[50px] text-center"> Reset password</h1>
                <h2 className="text-center text-[16px] md:text-[20px] font-bold w-full"> Enter your email address to receive instructions to reset your password</h2>


                <Input className="flex items-center w-full my-[20px] bg-white " placeholder="Email" height="50px" fontSize="17px"
                
                onChange={(e) => setEmail(e.target.value)}
                > 
                    
                </Input>  
                {resetResult.errorStatus && (
                            <div className=" text-[red] text-center my-[10px]">
                                {resetResult.error}
                            </div>
                        )}
                {!isWaitingResult ? (
                    <Button href="#" className="w-[100%] font-bold h-[50px] text-[18px] md:text-[24px] text-center hover:bg-[#000050]"
                    onClick={(e) => handleReset(e)}               
                    >  Send</Button>
                ):(
                    <Button href="#" className="w-[100%] font-bold h-[50px] text-[18px] md:text-[24px] text-center hover:bg-[#000050] opacity-40"
                    disabled
                    >  Send</Button>
                )}        
                
                <div className="text-[20px] md:text-[24px] text-[#000080] font-[700] text-center pt-[40px] md:pt-[100px] hover:text-[#000050]">

                <Link  to="#"
                onClick={() => {
                    onShowReset();
                    onShowLogin();               
                }}
                > Back to Sign inform</Link>
                </div>
                
           </div>






       </Wrapper>
    );
};

export default ResetPassword;