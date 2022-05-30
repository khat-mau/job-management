import Button from '../../components/button/Button';
import images from '../../assets/images';
import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import {BiDollar} from 'react-icons/bi';
import {HiLocationMarker} from 'react-icons/hi';
import {FaHourglassHalf} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const features = [{
    src:<img
        src={images.company}
        alt=""
        width="210px"
        height="100px"


    />,

    icon: <div className="flex flex-col items-center mx-auto ">
        <span className="font-[700] w-full text-center">
            HIGH TECH
        </span>

    <span className="font-[700] italic md:text-[16px] px-auto m-[5px] "> 9 positions left</span>
    <div className=" bg-[#f96B6B] w-[40px] h-[25px] absolute top-0 left-0"> 
        <span className="text-[15px] pl-[5px] text-white ">Hot</span>
    </div>
</div>,
    href:'#',
    
},
{
    src:<img
        src={images.company}
        alt=""
        width="210px"
        height="100px"


    />,

    icon: <div className="flex flex-col items-center mx-auto ">
        <span className="font-[700] w-full text-center">
            HIGH TECH
        </span>

    <span className="font-[700] italic md:text-[16px] px-auto m-[5px] "> 9 positions left</span>
    <div className=" bg-[#f96B6B] w-[40px] h-[25px] absolute top-0 left-0"> 
        <span className="text-[15px] pl-[5px] text-white ">Hot</span>
    </div>
</div>,
    href:'#',
    
},
{
    src:<img
        src={images.company}
        alt=""
        width="210px"
        height="100px"


    />,

    icon: <div className="flex flex-col items-center mx-auto ">
        <span className="font-[700] w-full text-center">
            HIGH TECH
        </span>

    <span className="font-[700] italic md:text-[16px] px-auto m-[5px] "> 9 positions left</span>
    <div className=" bg-[#f96B6B] w-[40px] h-[25px] absolute top-0 left-0"> 
        <span className="text-[15px] pl-[5px] text-white ">Hot</span>
    </div>
</div>,
    href:'#',
    
},
{
    src:<img
        src={images.company}
        alt=""
        width="210px"
        height="100px"


    />,

    icon: <div className="flex flex-col items-center mx-auto ">
        <span className="font-[700] w-full text-center">
            HIGH TECH
        </span>

    <span className="font-[700] italic md:text-[16px] px-auto m-[5px] "> 9 positions left</span>
    <div className=" bg-[#f96B6B] w-[40px] h-[25px] absolute top-0 left-0"> 
        <span className="text-[15px] pl-[5px] text-white ">Hot</span>
    </div>
</div>,
    href:'#',
    
},



];

const latestjob =[
    {
        title:'Jobs by Specialization' ,
        href: '#',
    },
    {
        title:' Management jobs' ,
        href: '#',
    },
    {
        title:'Part-time' ,
        href: '#',
    },
    {
        title:'General Labor' ,
        href: '#',
    },
];
 const latestjob2 =[
     {
        src:<div className="pr-[5px] md:pr-0"> 
        <img
            src={images.company}
            alt=""
            width="275px"
            height=""                                                           
            />
            </div>,
        
        title1:<div className="m-auto md:m-[20px] basis-3/6" > 
        <h1 className=""> Designer</h1>
        <div className="flex my-[5px] md:my-[20px]"> 
            <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]"/>
            <span className=""> 10-30 triệu</span>
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
    <div className="mx-1 my-[10px] md:my-[30px] basis-1/6"> 
                            <div className="flex mb-auto md:mb-[10px] "> 
                            <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> TP.HCM</h1>
                            </div>
                            <div className="flex"> 
                            <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> 24/06/2022</h1>
                            </div>                          
                        </div>, 
        
    href:"#",
     },
     {
        src:<div className="pr-[5px] md:pr-0"> 
        <img
            src={images.company}
            alt=""
            width="275px"
            height=""                                                           
            />
            </div>,
        
        title1:<div className="m-auto md:m-[20px] basis-3/6" > 
        <h1 className=""> Designer</h1>
        <div className="flex my-[5px] md:my-[20px]"> 
            <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]"/>
            <span className=""> 10-30 triệu</span>
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
    <div className="mx-1 my-[10px] md:my-[30px] basis-1/6"> 
                            <div className="flex mb-auto md:mb-[10px] "> 
                            <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> TP.HCM</h1>
                            </div>
                            <div className="flex"> 
                            <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> 24/06/2022</h1>
                            </div>                          
                        </div>, 
        
    href:"#",
     },
     {
        src:<div className="pr-[5px] md:pr-0"> 
        <img
            src={images.company}
            alt=""
            width="275px"
            height=""                                                           
            />
            </div>,
        
        title1:<div className="m-auto md:m-[20px] basis-3/6" > 
        <h1 className=""> Designer</h1>
        <div className="flex my-[5px] md:my-[20px]"> 
            <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]"/>
            <span className=""> 10-30 triệu</span>
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
    <div className="mx-1 my-[10px] md:my-[30px] basis-1/6"> 
                            <div className="flex mb-auto md:mb-[10px] "> 
                            <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> TP.HCM</h1>
                            </div>
                            <div className="flex"> 
                            <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> 24/06/2022</h1>
                            </div>                          
                        </div>, 
        
    href:"#",
     },
     {
        src:<div className="pr-[5px] md:pr-0"> 
        <img
            src={images.company}
            alt=""
            width="275px"
            height=""                                                           
            />
            </div>,
        
        title1:<div className="m-auto md:m-[20px] basis-3/6" > 
        <h1 className=""> Designer</h1>
        <div className="flex my-[5px] md:my-[20px]"> 
            <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]"/>
            <span className=""> 10-30 triệu</span>
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
    <div className="mx-1 my-[10px] md:my-[30px] basis-1/6"> 
                            <div className="flex mb-auto md:mb-[10px] "> 
                            <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> TP.HCM</h1>
                            </div>
                            <div className="flex"> 
                            <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> 24/06/2022</h1>
                            </div>                          
                        </div>, 
        
    href:"#",
     },
     {
        src:<div className="pr-[5px] md:pr-0"> 
        <img
            src={images.company}
            alt=""
            width="275px"
            height=""                                                           
            />
            </div>,
        
        title1:<div className="m-auto md:m-[20px] basis-3/6" > 
        <h1 className=""> Designer</h1>
        <div className="flex my-[5px] md:my-[20px]"> 
            <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]"/>
            <span className=""> 10-30 triệu</span>
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
    <div className="mx-1 my-[10px] md:my-[30px] basis-1/6"> 
                            <div className="flex mb-auto md:mb-[10px] "> 
                            <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> TP.HCM</h1>
                            </div>
                            <div className="flex"> 
                            <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> 24/06/2022</h1>
                            </div>                          
                        </div>, 
        
    href:"#",
     },
      
 ];
    

const Home = () => {
    return (
        <>
            <div >
                <Wrapper className="w-[100%] h-[40vw] "
                    content="flex  justify-between items-center h-[100%]"
                    style={{
                        backgroundImage: `url(${images.homeImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >

                    <div className="text-black mx-[auto] md:mx-0">
                        <Button href="#">Search</Button>
                    </div>
                    <div className=" text-white hidden md:block  w-[400px] text-justify flex-col">
                        <p className="md:text-[24px] font-[1000] mb-[20px]"> WELCOM TO FAST JOB</p>

                        <h2 className="font-[500] text-[5px] md:text-[18px] ">
                            We bring the mission of not leaving anyone unemployed, coming to this application, you can freely search for a job you love and are suitable for yourself. In addition, you can freely create jobs for free, but must go through censorship.
                        </h2>
                        <Button href="" className="mt-[20px] font-[700]"> MORE DETAILS ABOUT US </Button>
                    </div>




                </Wrapper>
                <Wrapper>
                <h1 className="text-[24px] md:text-[30px] font-bold my-2 mx-[auto] md:mx-[55px]">Featured companies for you</h1>

                <div className="grid grid-flow-row grid-cols-1 gap-2 my-[50px] md:grid-cols-4 ">
                    {/* <div className="border-solid border-2 border-black flex flex-row items-center mx-auto">
                        <div>
                        <img
                        src={images.company}
                        alt=""
                        width="420px"
                        height="200px"
                        
                        
                        />
                        </div>
                        <div className="flex flex-row items-center mx-auto">
                        <div>
                        <TiShoppingBag className="w-[50px] h-[60px] mx-[10px] md:mx-0" />
                        </div>
                        <span className="font-[700] md:text-[20px] px-auto ml-[20px]"> 9 positions left</span>
                        </div>
                        
                        
                        
                        
                    </div> */}
                    {features.map((feature,index1) =>(
                        <Link className="border-solid border-2 border-[#f0e3e3e7] hover:border-red-600 flex flex-col items-center mx-auto h-[250px] relative  w-[210px]" 
                        to={feature.href}
                        key={index1}
                        
                        > 
                                {feature.src}&ensp;{feature.icon}                           
                            </Link>
                                      
                                      
                                      ))
                                    }

                    
                    
                </div>

                <div className="flex my-2 font-bold"> 
                    <h1 className="text-[30px]  mx-[auto] md:mx-[55px] "> Latest job</h1>
                    
                    <div className="hidden md:block my-[10px]"> 
                    <Link className="text-[20px] text-[#2B138C] mr-[30px] underline underline-offset-1" to="#"> All</Link>                   
                    {/* <a className="text-[20px]  mr-[30px]" href="#"> Jobs by Specialization</a>
                    <a className="text-[20px]  mr-[30px]" href="#"> Management jobs</a>
                    <a className="text-[20px] mr-[30px]" href="#"> Part-time</a>
                    <a className="text-[20px]  mr-[30px]" href="#"> General Labor</a> */}
                    {latestjob.map((latestjob,index) => (
                        <Link 
                        
                        className="text-[20px]  mr-[30px]"                        
                        to={latestjob.href}
                        key={index}                        
                        >                           
                        {latestjob.title}
                        </Link>

                    ))}
                    
                    </div>
                </div>

                <div className="grid grid-flow-row gap-[50px] my-[50px] grid-cols-1">
                    {/* <div className="font-bold text-[10px] md:text-[20px] border-solid border-2 border-[#999999BF] hover:border-red-600 flex flex-row mx-auto w-[350px] md:w-[1250px]  md:h-[200px] "> 
                    <div className="pr-[15px] md:pr-0"> 
                    <img
                        src={images.company}
                        alt=""
                        width="275px"
                        height=""                                                           
                        />
                        </div>    
                        <div className="m-auto md:m-[20px] basis-3/6" > 
                            <h1 className=""> Designer</h1>
                            <div className="flex my-[10px] md:my-[20px]"> 
                                <BiDollar className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                                <span className=""> 10-30 triệu</span>
                            </div>
                            <div className="flex gap-2 mb-[5px] font-[400]"> 
                            <div className=" border-2 border-[#999999BF] min-w-[45px] pl-[1px] md:pl-0 "> 
                                <span className="text-center mx-auto md:mx-[30px]">English </span>
                            </div>
                            <div className=" border-2 border-[#999999BF] min-w-[45px] pl-[1px] md:pl-0"> 
                                <span className="text-center mx-auto md:mx-[30px]">Java </span>
                            </div>
                            <div className=" border-2 border-[#999999BF] min-w-[45px] pl-[1px] md:pl-0"> 
                                <span className="text-center mx-auto md:mx-[30px]">MySQL </span>
                            </div>
                            </div>
                            
                        </div>
                        <div className="mx-1 my-[10px] md:my-[30px] basis-1/6"> 
                            <div className="flex mb-auto md:mb-[10px] "> 
                            <HiLocationMarker className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> TP.HCM</h1>
                            </div>
                            <div className="flex"> 
                            <FaHourglassHalf className="max-w-[36px] max-h-[30px] mt-[3px]"/>
                            <h1> 24/06/2022</h1>
                            </div>                          
                        </div>

                    </div>  */}
                    {latestjob2.map((latestjob2,index) =>(
                        <Link 
                        className="font-bold text-[10px] md:text-[20px] border-solid border-2 border-[#f0e3e3e7] hover:border-red-600 flex flex-row mx-auto w-[350px] md:w-[1250px]  md:h-[200px]"
                        to={latestjob2.href}
                        key={index}
                        
                        > 
                        {latestjob2.src}&ensp;{latestjob2.title1}&ensp;{latestjob2.title2}
                        
                        
                        
                        </Link>

                    ))}
                    
                </div>

                
                                    </Wrapper>    

            </div>

        </>

    );

};
export default Home;
