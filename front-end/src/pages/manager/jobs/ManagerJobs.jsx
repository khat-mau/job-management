import Sidebar from '../../../components/layout/sidebar/Sidebar';
import { FiEdit3 } from 'react-icons/fi';
import Button from '../../../components/button/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { myJobsInCompany, updateCompany } from '../../../api/companyServices';
import { AiOutlinePlus } from 'react-icons/ai';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { createJob, deleteMyJob, updateJob } from '../../../api/jobServices';
import { getAllAddresses } from '../../../api/getAddress';

const salaryDatas = [
    '500 - 1000',
    '1000 - 1500',
    '1000 - 2000',
    '> 2000',
    'Deal',
];

const ManagerJobs = () => {
    const { companyId } = useParams();
    const user = useSelector((state) => state.auth.login.currentUser);
    const [datas, setDatas] = useState();
    const [isCreatingJob, setIsCreatingJob] = useState(false);
    const [jobName, setJobName] = useState('');
    const [categories, setCategories] = useState('');
    const [level, setLevel] = useState('');
    const [required, setRequired] = useState('');
    const [salary, setSalary] = useState();
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [locations, setLocations] = useState();
    const [locationSelected, setLocationSelected] = useState(0);
    const [editCompanyState, setEditCompanyState] = useState(false);
    const [editState, setEditState] = useState();
    const [changeState, setChangeState] = useState(false);
    const [nameCompany, setNameCompany] = useState();
    const [descriptionCompany, setDescriptionCompany] = useState();
    const [imgCompany, setImgCompany] = useState();
    const [nameJob, setNameJob] = useState();
    const [jobCategories, setJobCategories] = useState();
    const [jobLevel, setJobLevel] = useState();
    const [jobRequired, setJobRequired] = useState();
    const [jobSalary, setJobSalary] = useState();
    const [jobLocation, setJobLocation] = useState();
    const [jobDescription, setJobDescription] = useState();
    const [jobPhoto, setJobPhoto] = useState();

    useEffect(() => {
        (async function fetchApi() {
            let result = await myJobsInCompany(
                { userId: user._id, companyId },
                user.accessToken,
            );
            setDatas(result);
            result = await getAllAddresses();
            setLocations(result);
        })();
    }, [editState, changeState]);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmit = () => {
        if (
            jobName &&
            categories &&
            level &&
            required &&
            salary &&
            description &&
            previewSource
        ) {
            (async function fetchApi() {
                const result = await createJob(
                    {
                        companyId: companyId,
                        userId: user._id,
                        job: {
                            jobName,
                            categories,
                            level,
                            required,
                            salary,
                            description,
                            photo: previewSource,
                            location: locations.data[locationSelected].name,
                        },
                    },
                    user.accessToken,
                );
                if (result && result.errorStatus) {
                    alert(result.message);
                }
                setChangeState(!changeState);
                setIsCreatingJob(false);
            })();
        } else {
            alert('All fields are required');
        }
    };

    const handleSaveBtn = () => {
        setEditState();
    };

    const handleUpdateJob = (jobId) => {
        (async function fetchApi() {
            const result = await updateJob(
                {
                    userId: user._id,
                    companyId,
                    job: {
                        jobId,
                        jobName: nameJob,
                        jobCategories,
                        jobLevel,
                        jobRequired,
                        jobSalary,
                        jobLocation,
                        jobDescription,
                        jobPhoto,
                    },
                },
                user.accessToken,
            );
            if (result && result.errorStatus) {
                alert(result.message);
            } else {
                setEditState();
            }
        })();
    };

    const handleDeleteBtn = (jobId) => {
        if (window.confirm('Confirm Delete') == true) {
            (async function fetchAPI() {
                const result = await deleteMyJob(
                    {
                        companyId: companyId,
                        userId: user._id,
                        jobId,
                    },
                    user.accessToken,
                );
                if (result && result.errorStatus) {
                    alert(result.message);
                } else {
                    setChangeState(!changeState);
                }
            })();
        }
    };

    const handleEditCompany = () => {
        (async function fetchApi() {
            const result = await updateCompany(
                {
                    userId: user._id,
                    companyName: nameCompany,
                    companyDescription: descriptionCompany,
                    companyPhoto: imgCompany,
                    companyId: companyId,
                },
                user.accessToken,
            );
            if (result && result.errorStatus) {
                alert(result.message);
            } else {
                setChangeState(!changeState);
                setEditCompanyState(false);
            }
        })();
    };

    return (
        <div className="flex">
            <Sidebar company={datas?.data?.name} jobs={datas?.data?.jobs} />
            <div className="grow  bg-[#FBFBFF] md:p-[40px] mb-[15px]">
                <div className="p-[20px] border border-[#7777773b] bg-white">
                    <h1 className="text-[20px] font-medium flex items-center">
                        Create jobs in &nbsp;
                        {editCompanyState ? (
                            <input
                                type="text"
                                className="ml-[15px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#000070] rounded-[5px] sm:text-sm focus:ring-1 w-[250px]"
                                placeholder="Company Name"
                                value={nameCompany}
                                onChange={(e) => setNameCompany(e.target.value)}
                            />
                        ) : (
                            <strong>{datas?.data?.name || 'Not found'}</strong>
                        )}
                        {!editCompanyState && datas?.data?.name && (
                            <FiEdit3
                                className="ml-[15px] cursor-pointer"
                                onClick={() => {
                                    setEditCompanyState(true);
                                    setNameCompany(datas?.data?.name);
                                    setImgCompany(datas?.data?.photo);
                                    setDescriptionCompany(
                                        datas?.data?.description,
                                    );
                                }}
                            />
                        )}
                    </h1>
                    <div className="flex w-[100%]">
                        <div className="relative">
                            <img
                                src={
                                    editCompanyState
                                        ? imgCompany
                                        : datas?.data?.photo || ''
                                }
                                style={{
                                    width: '200px',
                                    height: '100px',
                                    objectFit: 'cover',
                                }}
                            />
                            {editCompanyState && (
                                <input
                                    className="absolute appearance-none top-0 left-0 opacity-0 w-[100%] h-[100%] cursor-pointer"
                                    name="img"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        const reader = new FileReader();
                                        reader.readAsDataURL(file);
                                        reader.onloadend = () => {
                                            setImgCompany(reader.result);
                                        };
                                    }}
                                />
                            )}
                        </div>

                        {editCompanyState ? (
                            <div className="break-words grow  ml-[15px] ">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={descriptionCompany}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDescriptionCompany(data);
                                    }}
                                    config={{
                                        ckfinder: {
                                            uploadUrl:
                                                'http://localhost:8000/api/upload/image',
                                        },
                                    }}
                                    // disabled={loading}
                                />
                            </div>
                        ) : (
                            <div className="break-words grow  ml-[15px] border border-[#7777772c] p-[10px]">
                                {datas &&
                                    !datas?.errorStatus &&
                                    parse(datas?.data?.description)}
                            </div>
                        )}
                    </div>
                    {editCompanyState && (
                        <div className="flex items-center pt-[40px] justify-around">
                            <Button onClick={() => setEditCompanyState(false)}>
                                Cancel
                            </Button>
                            <Button onClick={handleEditCompany}>Save</Button>
                        </div>
                    )}
                </div>

                {datas &&
                    !datas.errorStatus &&
                    datas?.data?.jobs.map((data, index) => (
                        <div
                            className="bg-[#fff] border-[2px] flex relative mt-[15px]"
                            key={index}
                        >
                            <div className="h-[100%] w-[75%] border-r-[2px] p-[20px] flex flex-col">
                                <div className="flex justify-between">
                                    {data.status === 'waiting' ? (
                                        'waiting'
                                    ) : data.status === 'banned' ? (
                                        'banned'
                                    ) : (
                                        <Button className="font-semibold">
                                            View Request
                                        </Button>
                                    )}

                                    <div className="text-right font-medium">
                                        Rate:{' '}
                                        {data.rates && data.rates.length > 0
                                            ? data.rates.reduce(
                                                  (item1, item2) =>
                                                      item1.value + item2.value,
                                                  0,
                                              ) / data.rates.length
                                            : '0'}
                                        <br />
                                        Comment:{' '}
                                        {data.comments &&
                                        data.comments.length > 0
                                            ? data.comments.length
                                            : '0'}
                                        <br />
                                        Request Candidate:{' '}
                                        {data.cvs && data.cvs.length > 0
                                            ? data.cvs.length
                                            : '0'}
                                    </div>
                                </div>
                                <div className="text-[24px] pt-[30px] pb-[15px] border-b font-medium flex items-center">
                                    {editState === index ? (
                                        <input
                                            type="text"
                                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#000070] block w-full rounded-md sm:text-sm focus:ring-1"
                                            placeholder="Your Name"
                                            value={nameJob}
                                            onChange={(e) =>
                                                setNameJob(e.target.value)
                                            }
                                        />
                                    ) : (
                                        data.name
                                    )}
                                    {editState !== index && (
                                        <FiEdit3
                                            className="ml-[15px] cursor-pointer"
                                            onClick={() => {
                                                setEditState(index);
                                                setNameJob(data.name);
                                                setJobCategories(
                                                    data.categories,
                                                );
                                                setJobLevel(data.level);
                                                setJobRequired(data.required);
                                                setJobSalary(data.salary);
                                                setJobLocation(data.location);
                                                setJobDescription(
                                                    data.description,
                                                );
                                                setJobPhoto(data.photo);
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="py-[10px] font-semibold text-[16px] flex flex-col ">
                                    {editState === index ? (
                                        <span className="flex items-center">
                                            <span className="basis-[100px]">
                                                Categories:
                                            </span>

                                            <input
                                                type="text"
                                                className="ml-[15px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#000070] rounded-[5px] sm:text-sm focus:ring-1 w-[250px]"
                                                placeholder="Career"
                                                onChange={(e) =>
                                                    setJobCategories(
                                                        e.target.value,
                                                    )
                                                }
                                                value={jobCategories}
                                            />
                                        </span>
                                    ) : (
                                        <span className="py-[5px] flex items-center">
                                            Categories: {data.categories}
                                        </span>
                                    )}
                                    {editState === index ? (
                                        <span className="flex items-center">
                                            <span className="basis-[100px]">
                                                Level:
                                            </span>

                                            <input
                                                type="text"
                                                className="ml-[15px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#000070] rounded-[5px] sm:text-sm focus:ring-1 w-[250px]"
                                                placeholder="Manager/Employee ..."
                                                onChange={(e) =>
                                                    setJobLevel(e.target.value)
                                                }
                                                value={jobLevel}
                                            />
                                        </span>
                                    ) : (
                                        <span className="py-[5px] flex items-center ">
                                            Level: {data.level}
                                        </span>
                                    )}
                                    {editState === index ? (
                                        <span className="flex items-center">
                                            <span className="basis-[100px]">
                                                Required:
                                            </span>
                                            <input
                                                type="text"
                                                className="ml-[15px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#000070] rounded-[5px] sm:text-sm focus:ring-1 w-[250px]"
                                                placeholder="Skills, IELTS 6.0,..."
                                                onChange={(e) =>
                                                    setJobRequired(
                                                        e.target.value,
                                                    )
                                                }
                                                value={jobRequired}
                                            />
                                        </span>
                                    ) : (
                                        <span className="py-[5px] flex items-center">
                                            Required: {data.required}
                                        </span>
                                    )}
                                    {editState === index ? (
                                        <span className="flex items-center mt-[10px]">
                                            <span className="basis-[100px]">
                                                Salary: $
                                            </span>
                                            {salaryDatas &&
                                                salaryDatas.map(
                                                    (salaryData) => {
                                                        if (
                                                            salaryData ===
                                                            jobSalary
                                                        ) {
                                                            return (
                                                                <div
                                                                    className=" cursor-pointer ml-[15px] flex items-center justify-center w-[125px] h-[35px] border-2 border-[#000070] text-[#000070] rounded "
                                                                    onClick={() =>
                                                                        setJobSalary(
                                                                            salaryData,
                                                                        )
                                                                    }
                                                                >
                                                                    {salaryData}
                                                                </div>
                                                            );
                                                        } else {
                                                            return (
                                                                <div
                                                                    className=" cursor-pointer ml-[15px] flex items-center justify-center w-[125px] h-[35px] border border-slate-300 text-slate-400 rounded font-normal"
                                                                    onClick={() =>
                                                                        setJobSalary(
                                                                            salaryData,
                                                                        )
                                                                    }
                                                                >
                                                                    {salaryData}
                                                                </div>
                                                            );
                                                        }
                                                    },
                                                )}
                                        </span>
                                    ) : (
                                        <span className="py-[5px] flex items-center">
                                            Salary: {data.salary}
                                        </span>
                                    )}

                                    {editState === index ? (
                                        <span className="flex items-center">
                                            <span className="basis-[100px]">
                                                Location
                                            </span>
                                            <select
                                                className="border border-slate-300 ml-[15px] mt-[4px] h-[40px]"
                                                onChange={(e) =>
                                                    setJobLocation(
                                                        e.target.value,
                                                    )
                                                }
                                            >
                                                {locations &&
                                                    !locations.errorStatus &&
                                                    locations.data.map(
                                                        (location, index) => (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    locations.name
                                                                }
                                                                selected={
                                                                    location.name ===
                                                                    jobLocation
                                                                }
                                                            >
                                                                {' '}
                                                                {
                                                                    location.name
                                                                }{' '}
                                                            </option>
                                                        ),
                                                    )}
                                            </select>
                                        </span>
                                    ) : (
                                        <span className="py-[5px] flex items-center">
                                            Location: {data.location}
                                        </span>
                                    )}
                                </div>
                                {editState === index ? (
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={jobDescription}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setJobDescription(data);
                                        }}
                                        config={{
                                            ckfinder: {
                                                uploadUrl:
                                                    'http://localhost:8000/api/upload/image',
                                            },
                                        }}
                                        // disabled={loading}
                                    />
                                ) : (
                                    <div className="h-[450px] border py-[10px] px-[20px] relative">
                                        {parse(data?.description)}
                                    </div>
                                )}
                                <div className="flex items-center pt-[40px] justify-around">
                                    {editState === index ? (
                                        <>
                                            <Button
                                                onClick={() => setEditState()}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    handleUpdateJob(data._id)
                                                }
                                            >
                                                Save
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            onClick={() =>
                                                handleDeleteBtn(data._id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className="grow flex relative">
                                <div className="relative inline-block w-[100%] h-[100%]">
                                    <img
                                        className="absolute top-[50%] left-[50%]  max-h-[100%] max-w-[100%] min-h-[50%] min-w-[50%]"
                                        src={
                                            editState === index
                                                ? jobPhoto
                                                : data.photo || ''
                                        }
                                        style={{
                                            objectFit: 'cover',
                                            transform: 'translate(-50%,-50%)',
                                        }}
                                    />
                                    {editState === index && (
                                        <input
                                            className="absolute appearance-none top-0 left-0 opacity-0 w-[100%] h-[100%] cursor-pointer"
                                            name="img"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                const reader = new FileReader();
                                                reader.readAsDataURL(file);
                                                reader.onloadend = () => {
                                                    setJobPhoto(reader.result);
                                                };
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                {isCreatingJob && (
                    <div className="bg-[#fff] border-[2px] flex relative mt-[15px]">
                        <div className="h-[100%] w-[75%] border-r-[2px] p-[20px] flex flex-col ">
                            <div className="flex justify-between">
                                <div></div>
                                <div className="text-right font-medium">
                                    Rate: 0
                                    <br />
                                    Comment: 0
                                    <br />
                                    Request Candidate: 0
                                </div>
                            </div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Job Name
                                </span>
                                <input
                                    type="text"
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#000070] block w-full rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Your Name"
                                    onChange={(e) => setJobName(e.target.value)}
                                />
                            </label>
                            <div className="py-[10px] font-semibold text-[16px] flex flex-col ">
                                <span className="flex items-center">
                                    <span className="basis-[100px]">
                                        Categories:
                                    </span>

                                    <input
                                        type="text"
                                        className="ml-[15px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#000070] rounded-[5px] sm:text-sm focus:ring-1 w-[250px]"
                                        placeholder="Career"
                                        onChange={(e) =>
                                            setCategories(e.target.value)
                                        }
                                    />
                                </span>
                                <span className="flex items-center">
                                    <span className="basis-[100px]">
                                        Level:
                                    </span>

                                    <input
                                        type="text"
                                        className="ml-[15px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#000070] rounded-[5px] sm:text-sm focus:ring-1 w-[250px]"
                                        placeholder="Manager/Employee ..."
                                        onChange={(e) =>
                                            setLevel(e.target.value)
                                        }
                                    />
                                </span>
                                <span className="flex items-center">
                                    <span className="basis-[100px]">
                                        Required:
                                    </span>
                                    <input
                                        type="text"
                                        className="ml-[15px] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#000070] rounded-[5px] sm:text-sm focus:ring-1 w-[250px]"
                                        placeholder="Skills, IELTS 6.0,..."
                                        onChange={(e) =>
                                            setRequired(e.target.value)
                                        }
                                    />
                                </span>
                                <span className="flex items-center mt-[10px]">
                                    <span className="basis-[100px]">
                                        Salary: $
                                    </span>
                                    {salaryDatas &&
                                        salaryDatas.map((salaryData) => {
                                            if (salaryData === salary) {
                                                return (
                                                    <div
                                                        className=" cursor-pointer ml-[15px] flex items-center justify-center w-[125px] h-[35px] border-2 border-[#000070] text-[#000070] rounded "
                                                        onClick={() =>
                                                            setSalary(
                                                                salaryData,
                                                            )
                                                        }
                                                    >
                                                        {salaryData}
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div
                                                        className=" cursor-pointer ml-[15px] flex items-center justify-center w-[125px] h-[35px] border border-slate-300 text-slate-400 rounded font-normal"
                                                        onClick={() =>
                                                            setSalary(
                                                                salaryData,
                                                            )
                                                        }
                                                    >
                                                        {salaryData}
                                                    </div>
                                                );
                                            }
                                        })}
                                </span>
                                <span className="flex items-center">
                                    <span className="basis-[100px]">
                                        Location
                                    </span>
                                    <select
                                        className="border border-slate-300 ml-[15px] mt-[4px] h-[40px]"
                                        onChange={(e) =>
                                            setLocationSelected(
                                                e.target.selectedIndex,
                                            )
                                        }
                                    >
                                        {locations &&
                                            !locations.errorStatus &&
                                            locations.data.map(
                                                (location, index) => (
                                                    <option
                                                        key={index}
                                                        value={locations.name}
                                                        selected={
                                                            locationSelected ===
                                                            index
                                                        }
                                                    >
                                                        {' '}
                                                        {location.name}{' '}
                                                    </option>
                                                ),
                                            )}
                                    </select>
                                </span>
                            </div>
                            <CKEditor
                                editor={ClassicEditor}
                                data={description}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setDescription(data);
                                }}
                                config={{
                                    ckfinder: {
                                        uploadUrl:
                                            'http://localhost:8000/api/upload/image',
                                    },
                                }}
                                // disabled={loading}
                            />
                            <div className="flex items-center pt-[40px] justify-around">
                                <Button onClick={() => setIsCreatingJob(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={handleSubmit}>Save</Button>
                            </div>
                        </div>
                        <div className="grow flex relative ">
                            <div className="relative inline-block w-[100%] h-[100%]">
                                <Button
                                    className="absolute m-[auto] text-[16px] w-[175px] top-[50%] left-[50%]"
                                    type="file"
                                    style={{
                                        transform: 'translate(-50%,-50%)',
                                    }}
                                >
                                    Import Image
                                </Button>
                                {previewSource && (
                                    <img
                                        className="absolute top-[50%] left-[50%]  max-h-[100%] max-w-[100%] min-h-[50%] min-w-[50%]"
                                        src={previewSource}
                                        alt="chosen"
                                        style={{
                                            objectFit: 'cover',
                                            transform: 'translate(-50%,-50%)',
                                        }}
                                    />
                                )}
                                <input
                                    className="absolute appearance-none top-0 left-0 opacity-0 w-[100%] h-[100%] cursor-pointer"
                                    name="img"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileInputChange}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {datas &&
                    !datas.errorStatus &&
                    datas.data.status !== 'waiting' &&
                    datas.data.status !== 'banned' &&
                    !isCreatingJob && (
                        <div
                            className="h-[150px] bg-white border border-[#99999934] hover:border-[#000070] flex items-center justify-center cursor-pointer mt-[15px]"
                            onClick={() => setIsCreatingJob(true)}
                        >
                            <AiOutlinePlus className="text-[50px]" />
                        </div>
                    )}
            </div>
        </div>
    );
};

export default ManagerJobs;
