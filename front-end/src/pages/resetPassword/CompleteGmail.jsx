import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CompleteGmail = ({onShowLogin,onShowCompleteGmail}) => {
    return (
       <Wrapper className=""
                content=" flex justify-center   "
       >
           <div className=" bg-white  box-border min-w-[350px] md:w-[450px] min-h-[450px] md:h-[500px] px-[50px] md:px-[80px] drop-shadow-lg rounded-[10px] flex flex-col justify-center items-center text-black mx-[40px]">  
           <h1 className=" text-[30px] md:text-[35px] font-[700] py-0 md:py-[10px] text-center text-blue-900"> Gmail exactly!!!</h1>
                <h2 className=" text-[16px] md:text-[20px] text-justify font-bold w-full py-[30px] md:py-[20px] text-blue-300"> 
                A confirmation mail has been sent to your gmail, please check in gmail and proceed to change the new password.</h2>

                    <Button href="#" className="w-[100%] font-bold h-[50px] text-[18px] md:text-[24px] text-center hover:bg-[#000050]"
                    onClick={() =>{ 
                        onShowCompleteGmail();
                        onShowLogin();}}             
                    >  Back to Login</Button>      
                
           </div>






       </Wrapper>
    );
};

export default CompleteGmail;