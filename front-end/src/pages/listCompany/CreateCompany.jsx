import { GrClose } from 'react-icons/gr';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { memo, useRef, useState, useEffect } from 'react';
import Button from '../../components/button/Button';
import './style.css';
import { createCompany } from '../../api/companyServices';
import { useSelector } from 'react-redux';

const CreateCompany = ({ state, onClose }) => {
    const prevState = useRef();
    const user = useSelector((state) => state.auth.login.currentUser);
    const [description, setDescription] = useState(
        prevState.current?.description || '',
    );
    const [fileInputState, setFileInputState] = useState(
        prevState.current?.fileInputState || '',
    );
    const [selectedFile, setSelectedFile] = useState(
        prevState.current?.selectedFile || '',
    );
    const [previewSource, setPreviewSource] = useState(
        prevState.current?.previewSource || '',
    );
    const [nameCompany, setNameCompany] = useState(
        prevState.current?.nameCompany || '',
    );
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        prevState.current = {
            nameCompany,
            description,
            previewSource,
        };
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedFile) return;
        setLoading(true);
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    createCompany(
                        {
                            userId: user._id,
                            name: nameCompany,
                            description: description,
                            photo: previewSource,
                        },
                        user.accessToken,
                    ),
                );
            }, 2000);
        })
            .then((data) => {
                if (!data.errorStatus && data.errorStatus !== undefined) {
                    setDescription('');
                    setFileInputState('');
                    setSelectedFile('');
                    setPreviewSource('');
                    setNameCompany('');
                    onClose();
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    };

    return (
        <>
            {state ? (
                <div className="fixed z-[9999] top-[0] bg-[#00000071] w-[100vw] h-[100vh]">
                    <div
                        className="w-[100vw] md:w-[600px] h-[100vh] md:h-[800px] bg-[#Fff] flex flex-col md:rounded-[5px] top-[50%] left-[50%] absolute py-[20px] px-[30px] overflow-y-auto overflow-x-hidden"
                        style={{ transform: 'translate(-50%, -50%)' }}
                    >
                        <GrClose
                            className="ml-[100%] cursor-pointer mb-[20px] shrink-0"
                            onClick={onClose}
                        />
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Name Company
                            </span>
                            <input
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Your Name"
                                value={nameCompany}
                                readOnly={loading}
                                onChange={(e) => {
                                    setNameCompany(e.target.value);
                                }}
                            />
                        </label>
                        <div className="mt-[20px]">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Description
                            </span>
                            <CKEditor
                                className="min-h-[300px]"
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
                                disabled={loading}
                            />
                        </div>
                        <div className="mt-[20px]">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Avatar
                            </span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileInputChange}
                                disabled={loading}
                            />
                        </div>
                        <div className="min-h-[240px]">
                            {previewSource && (
                                <img
                                    src={previewSource}
                                    alt="chosen"
                                    style={{
                                        height: '240px',
                                        objectFit: 'cover',
                                    }}
                                />
                            )}
                        </div>
                        <div className="h-[100%] flex items-end justify-center">
                            {loading ? (
                                <Button
                                    className="w-full text-white rounded-lg h-7 md:h-10"
                                    type="button"
                                    disabled
                                >
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                </Button>
                            ) : (
                                <Button
                                    className="w-full text-white rounded-lg h-7 md:h-10"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="absolute w-[100%] h-[100%] -z-10"></div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
export default CreateCompany;
