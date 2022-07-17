import { GrClose } from 'react-icons/gr';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from 'react';
import Button from '../../components/button/Button';
import './style.css';
import axios from 'axios';

const CreateCompany = () => {
    const [description, setDescription] = useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource, setPreviewSource] = useState('');

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
        console.log(selectedFile);
        var formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', 'rvswxotu');
        axios({
            url: 'https://api.cloudinary.com/v1_1/dwz7hut39/upload',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: formData,
        }).then((res) => {
            console.log(res.data.secure_url);
        });
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('http://localhost:8000/api/upload/image/', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="fixed z-[9999] top-[0] bg-[#00000071] w-[100vw] h-[100vh]">
            <div
                className="w-[100vw] md:w-[600px] h-[100vh] md:h-[800px] bg-[#Fff] flex flex-col md:rounded-[5px] top-[50%] left-[50%] absolute py-[20px] px-[30px] overflow-y-auto overflow-x-hidden"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <GrClose className="ml-[100%] cursor-pointer mb-[20px] shrink-0" />
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Name Company
                    </span>
                    <input
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Your Name"
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
                    />
                </div>
                <div className="mt-[20px]">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Avatar
                    </span>
                    <input
                        type="file"
                        accept="image/*"
                        value={fileInputState}
                        onChange={handleFileInputChange}
                    />
                </div>
                <div className="min-h-[240px]">
                    {previewSource && (
                        <img
                            src={previewSource}
                            alt="chosen"
                            style={{ height: '240px', objectFit: 'cover' }}
                        />
                    )}
                </div>
                <div className="h-[100%] flex items-end justify-center">
                    <Button
                        className="w-[100%] h-[50px] text-[18px]"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
            <div className="absolute w-[100%] h-[100%] -z-10"></div>
        </div>
    );
};

export default CreateCompany;
