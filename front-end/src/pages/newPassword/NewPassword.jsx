import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
const NewPassword= () =>{
    return(
        <Wrapper className="bg-[#EDEDED] "
                content=" flex justify-center "
       >
           <div className="  bg-black box-border min-w-[350px] w-[600px] h-[600px] px-[50px] md:px-[100px] drop-shadow-lg rounded-0 md:rounded-[10px] flex flex-col text-white mx-[40px] my-[150px] md:my-[200px]"> 

                <h1 className="  text-[28px] md:text-[35px] font-[700] my-[50px] text-center "> Set new password </h1>

                

                <div className="flex items-center box-border h-[50px] border-2 rounded-[5px] mx-auto md:px-100px my-[20px] bg-white w-[100%]"> 
                    <p className="text-[16px] md:text-[20px] text-[#00000075] px-[15px]  border-[#000000] "> New password</p>
                </div>
                <div className=" flex items-center box-border w-full h-[50px] border-2 rounded-[5px] mx-auto md:px-100px mb-[50px] bg-white"> 
                    <p className=" text-[16px] md:text-[20px] text-[#00000075] px-[15px]   border-[#000000] "> Confirm password</p>
                </div>            
                <Button href="#" className="w-[100%] font-bold h-[60px] text-[18px] md:text-[24px] text-center hover:bg-[#000050]">  Change Password </Button>

                <Link className="text-[16px] md:text-[20px] text-[#FFFFFF] font-[700] mx-auto md:mx-[90px] my-[50px] hover:text-[#000050]" to="#"> Back to Sign inform</Link>
           </div>


       </Wrapper>
    
        );
};

export default NewPassword;