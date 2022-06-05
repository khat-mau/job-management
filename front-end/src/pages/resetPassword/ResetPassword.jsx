import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';


const ResetPassword = () => {
    return (
       <Wrapper className="bg-[#EDEDED]  "
                content=" flex justify-center   "
       >
           <div className="  bg-white  box-border min-w-[350px] w-[600px] h-[600px] px-[50px] md:px-[100px] drop-shadow-lg rounded-0 md:rounded-[10px] flex flex-col text-black mx-[40px] my-[150px] md:my-[200px]">  
                <h1 className=" text-[30px] md:text-[35px] font-[700] my-[50px] text-center"> Reset password</h1>
                <h2 className="text-center text-[16px] md:text-[20px] font-bold w-full"> Enter your email address to receive instructions to reset your password</h2>


                <div className="flex items-center box-border w-full h-[50px] border-2 rounded-[5px] mx-auto md:px-100px my-[20px] bg-white "> 
                    <p className="text-[18px] md:text-[24px] text-[#00000075] px-[15px] border-b-1 border-[#000000] "> Email</p>
                </div>  

                <Button href="#" className="w-[100%] font-bold h-[50px] text-[18px] md:text-[24px] text-center hover:bg-[#000050]">  Send</Button>

                <Link className="text-[20px] md:text-[24px] text-[#000080] font-[700] text-center mt-[100px] hover:text-[#000050]" to="#"> Back to Sign inform</Link>
           </div>






       </Wrapper>
    );
};

export default ResetPassword;