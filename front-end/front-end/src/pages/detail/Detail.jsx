import Button from '../../components/button/Button';
import images from '../../assets/images';
import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import { BiDollar, BiLike, BiDislike } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import { BsFlagFill, BsStar } from 'react-icons/bs';
import { GoMortarBoard } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';




import { Link } from 'react-router-dom';



const latestjob2 = [
    {
        src: <div className="bg-cover bg-center">
            <img
                src={images.company}
                alt=""
                width="275px"
                height=""
            />
        </div>,

        title1: <div className="m-auto md:m-[20px] basis-3/6" >
            <h1 className=""> Designer</h1>
            <div className="flex my-[5px] md:my-[20px]">
                <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]" />
                <span className="mr-[20px]"> 10-30 triệu</span>
                <span className=""> TP.HCM</span>

            </div>
            <div className="flex flex-wrap gap-2 mb-[5px] font-[400]">
                <div className="flex justify-center items-center border-2 border-[#999999BF] min-w-[45px] md:pl-0 ">
                    <span className="mx-auto md:mx-[30px]">English </span>
                </div>
                <div className=" flex justify-center items-center border-2 border-[#999999BF] min-w-[45px] md:pl-0">
                    <span className="mx-auto md:mx-[30px]">Java </span>
                </div>
                <div className="flex justify-center items-center border-2 border-[#999999BF] min-w-[45px] md:pl-0">
                    <span className="mx-auto md:mx-[30px]">MySQL </span>
                </div>
                <div className=" flex justify-center items-center border-2 border-[#999999BF] min-w-[45px] md:pl-0">
                    <span className=" mx-auto md:mx-[30px]">MySQL </span>
                </div>
            </div>

        </div>,

        title2:
            <div className="flex flex-row mx-1 my-[5px] md:my-[20px] basis-1/6">
                <div className="mb-auto whitespace-nowrap md:mb-[10px]">
                    <Button className="text-white font-bold text-[10px] mb-[5px] min-w-[50px]">
                        <span>Post CV</span>
                    </Button>
                    <Button className="bg-[#00CE78] text-white font-bold text-[10px] mb-[5px] min-w-[50px]">
                        <span>Post CV</span>
                    </Button>
                    <Button className="bg-[#DC2C56] text-white font-bold text-[10px] min-w-[50px]">
                        <span>Post CV</span>
                    </Button>
                </div>
            </div>,

        href: "#",
    },
];

const Detail = () => {
    return (
        <>
            <div >
                <Wrapper className="w-full">
                    <div className="flex flex-row text-center items-center mx-auto ">
                        <div class="mx-auto input-group relative flex items-stretch mt-4 w-full">
                            <input type="search" class="basis-3/5 form-control relative flex-auto block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <input type="gps" class="basis-3/5 mr-[5px] form-control relative flex-auto block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="GPS" aria-label="Search" aria-describedby="button-addon2" />
                            <button class="btn w-auto px-3 md:px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 grid-flow-row gap-[50px] my-[20px]">
                        { }
                        {latestjob2.map((latestjob2, index) => (
                            <Link
                                className="w-full font-bold text-[10px] md:text-[20px] border-solid border-2 border-[#f0e3e3e7] hover:border-red-600 flex flex-row mx-auto md:h-[200px]"
                                to={latestjob2.href}
                                key={index}
                            >
                                {latestjob2.src}&ensp;{latestjob2.title1}&ensp;{latestjob2.title2}
                            </Link>

                        ))}

                    </div>
                    {/* Mô tả và hình anh */}
                    <div className='flex flex-row w-full gap-2'>
                        {/* Detail */}
                        <div className='bg-red-100 basis-4/5 text-center'>
                            <div>
                                <p>Detail</p>
                            </div>
                        </div>
                        {/* thông tin, hình ảnh */}
                        <div className='basis-1/5 flex flex-col gap-2'>
                            {/* cột thông tin */}
                            <div className='bg-slate-300 px-5'>
                                <div className='flex flex-row text-left py-3 mb-auto '>
                                    <div>
                                        <GoMortarBoard className="w-[24px] h-[24px] " />
                                    </div>
                                    <div className='ml-4 text-[13px] md:text-[15px] whitespace-nowrap'>
                                        <h1 className='font-bold'>CẤP BẬC</h1>
                                        <p>nhân viên</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex flex-row text-left py-3 mb-auto ' >
                                    <div>
                                        <MdWork className="w-[24px] h-[24px] pt-0 " />
                                    </div>
                                    <div className='ml-4 text-[13px] md:text-[15px] whitespace-nowrap'>
                                        <h1 className='font-bold'>NGHÀNH NGHỀ</h1>
                                        <p>IT-phần mềm, Tester</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex flex-row text-left py-3  mb-auto'>
                                    <div>
                                        <BsFlagFill className="w-[24px] h-[24px]" />
                                    </div>
                                    <div className='ml-4 text-[13px] md:text-[15px] overflow-hidden ..."' >
                                        <h1 className='font-bold'>KỸ NĂNG</h1>
                                        <p>Vận hành ứng dụng</p>
                                        <p>Back-End</p>
                                    </div>
                                </div>
                            </div>
                            {/* cột hình ảnh */}
                            <div className='bg-slate-300 '>
                                <div className='aspect-w-3 aspect-h-2 inline'>
                                    <img
                                        src={images.company}
                                        alt=""
                                        // width="210px"
                                        // height="100px"
                                        className='object-cover h-full'
                                    />,
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Bảng đánh giá vs khung bình luận */}
                    <div class="flex flex-row w-full mt-4" >
                        {/* Bang ratting  */}
                        <div className='bg-red-200 w-[30%] text-center mx-auto mr-3 max-h-full md:text-lg text-xs px-2'>
                            <div className='w-full flex flex-col justify-center py-7'>
                                <h1>Customer Rating</h1>
                                <div className='flex flex-row mx-auto my-2'>
                                    <BsStar className='h-5 w-5' />
                                    <BsStar className='h-5 w-5' />
                                    <BsStar className='h-5 w-5' />
                                    <BsStar className='h-5 w-5' />
                                    <BsStar className='h-5 w-5' />
                                </div>
                                <div>
                                    <p>4/5</p>
                                    <p>In 169/196 People rating</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-blue-300 w-[70%] flex py-5 px-4'>
                            <div className='flex flex-row w-full'>
                                <div className='w-[30%] mx-auto pr-6 md:w-[15%]'>
                                    <CgProfile className="h-[50px] w-[50px] mx-auto" />
                                    <p>Name text</p>
                                </div>
                                <div className='w-[70%] h-fit md:w-[85%]' >
                                    <textarea className='px-2 py-4 w-full' rows="2" cols="20">
                                        abc
                                    </textarea>
                                    <Button className="justify-end ml-auto bg-green-500 font-bold">
                                        <label>Send</label>
                                    </Button>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Danh sach binh luan */}
                    <div className='flex flex-row w-full my-7 border-b-2 px-5' >
                        <div className='w-[20%]'>
                            <CgProfile className="h-[50px] w-[50px] mx-auto" />
                        </div>
                        <div className='w-[80%] flex-row'>
                            <h1 className='font-bold'>Name User</h1>
                            <p>I very like this company, because it is so good,
                                good easdn iaosdn aosdn asodn aosdn asodn saodn
                                saodi nasodi nosdin osadn oasdn saodn osaind saodn
                                asodni saodn saodni</p>
                            <div className='flex flex-row mx-auto my-2 mr-3'>
                                <BiLike className='h-6 w-6'/>
                                <BiDislike  className='h-6 w-6'/>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-row w-full my-7 px-5' >
                        <div className='w-[20%]'>
                            <CgProfile className="h-[50px] w-[50px] mx-auto" />
                        </div>
                        <div className='w-[80%] flex-row'>
                            <h1 className='font-bold'>Name User</h1>
                            <p>I very like this company, because it is so good,
                                good easdn iaosdn aosdn asodn aosdn asodn saodn
                                saodi nasodi nosdin osadn oasdn saodn osaind saodn
                                asodni saodn saodni</p>
                            <div className='flex flex-row mx-auto my-2 mr-3'>
                                <BiLike className='h-6 w-6'/>
                                <BiDislike  className='h-6 w-6'/>
                            </div>
                        </div>
                    </div>

                </Wrapper>

            </div>

        </>

    );

};
export default Detail;
