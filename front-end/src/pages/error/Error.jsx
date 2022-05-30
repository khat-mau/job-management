import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import {AiFillLinkedin} from 'react-icons/ai'
const Error = () => (
    <>
        <div className="h-[100vh] ">
            <h1 className="text-[#000070] font-bold text-[100px] text-center">404</h1>
            <div className=" text-[30px] font-[1000] text-center">
                Khong tim thay noi dung
            </div>
            <h3 className="text-center">URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.<br /> Nếu bạn đang lưu URL này hãy thử truy cập lại từ trang chủ thay vì dùng URL đã lưu</h3>
            <div className="bg-[#000070] mx-auto w-[200px] text-center mt-[20px] text-white rounded-full border p-[10px]"> Truy cập trang chủ </div>
            <div className="box-border text-center w-[100%] absolute bottom-[10px]">2018 - 2022 FB. All rights reserved.</div>
        </div>
        
    </>

);

export default Error;
