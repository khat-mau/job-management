import Wrapper from '../defaultLayout/wrapper/Wrapper';

const Sidebar = ({ company, jobs }) => {
    return (
        <>
            <Wrapper
                className=" h-[100vh] w-[0] md:min-w-[300px] text-[#fff]"
                content="p-[20px]"
            ></Wrapper>
            <div className="fixed bg-[#000050] text-[#fff] md:w-[300px] w-[0] h-[100vh]  mx-[auto]   md:p-[20px]">
                <div className="font-bold text-[20px] text-center mb-[20px]">
                    {company}
                </div>
                <h1 className="border-b border-[#ffffff86]"> </h1>
                {jobs &&
                    jobs.map((job, index) => (
                        <div className="mb-[10px]" key={index}>
                            {index + 1}. {job.name}
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Sidebar;
