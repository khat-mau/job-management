import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import Input from '../../components/input/Input';
import { useState } from 'react';
import * as newPassService from '../../api/newPassword';
const NewPassword= ({onShowLogin,onShowNewPass}) =>{
    const [newPass, setNewPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [isWaitingResult, setIsWaitingResult] = useState(false);
    const [newPassResult, setNewPassResult] = useState([]);
    const handleNewPassword = (e) => {
        e.preventDefault();
        try {
            const NewPassword = {
                newPass,
                confirm,
              
            };
            const fetch = () => {
                setIsWaitingResult(true);
                // Gọi api và chỉ định chờ 2 giây cho response
                const promise = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(newPassService.newPass(NewPassword));
                    }, 2000);
                })
                    .then((data) => {
                        if (true
                            // !data.errorStatus &&
                            // data.errorStatus !== undefined
                        ) {
                            onShowLogin();
                            onShowNewPass();

                        }
                        setNewPassResult(data);
                    })
                    .catch((err) => console.log(err))
                    .finally(() => setIsWaitingResult(false));
            };
            fetch();
        } catch (err) {
            console.log(err);
        }
    };
    return(
        <Wrapper className=""
                content=" flex justify-center "
       >
           <div className="  bg-black box-border min-w-[350px] md:w-[550px] min-h-[450px] md:h-[600px] px-[50px] md:px-[100px] drop-shadow-lg rounded-[10px] flex flex-col text-white mx-[40px] my-[150px] md:my-[200px]"> 

                <h1 className="  text-[25px] md:text-[35px] font-[700] py-[30px] text-center "
                
                > Set new password </h1>

                
                <Input className="flex items-center w-full my-[20px] text-[#00000075]  " placeholder="New password" height="50px" fontSize="20px"> 
                onChange={(e) => setNewPass(e.target.value)}  
                </Input>
                <Input className="flex items-center w-full my-[20px] text-[#00000075]  " placeholder="Confirm password" height="50px" fontSize="20px"> 
                onChange={(e) => setConfirm(e.target.value)}   
                </Input> 
                {newPassResult.errorStatus && (
                            <div className=" text-[red] text-center mt-[20px]">
                                {typeof newPassResult.dataError
                                    .errorMessage === 'object'
                                    ? newPassResult.dataError.errorMessage.join(
                                          ', ',
                                      )
                                    : newPassResult.dataError.errorMessage}
                            </div>
                        )}

                {!isWaitingResult ? (
                    <Button href="#" className="w-[100%] font-bold h-[50px] text-[18px] md:text-[24px] text-center hover:bg-[#000050]"
                       
                    onClick={(e)=>handleNewPassword(e)}
                    >  Change Password </Button>
                ):(
                    <Button href="#" className="w-[100%] font-bold h-[50px] text-[18px] md:text-[24px] text-center hover:bg-[#000050] opacity-40"
                    disabled
                    >  Change Password </Button>
                )}                 
                

                <Link className="text-[20px] md:text-[24px] text-[#FFFFFF] font-[700] text-center pt-[40px] md:pt-[80px] hover:text-[#000050]" to="#"
                onClick={() => {
                    onShowNewPass();
                    onShowLogin();               
                   }}

                > Back to Sign inform</Link>
           </div>


       </Wrapper>
    
        );
};

export default NewPassword;