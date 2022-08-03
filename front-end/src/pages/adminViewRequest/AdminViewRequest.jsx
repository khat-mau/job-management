import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { viewARequest } from '../../api/adminService';
import parse from 'html-react-parser';

const AdminViewRequest = () => {
    const [data, setData] = useState();
    const id = useParams();
    const user = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        (async function fetchApi() {
            const result = await viewARequest(id, user.accessToken);
            setData(result);
        })();
    }, []);

    return (
        <>
            {data && data.errorStatus === false && (
                <>
                    {data.category === 'job' ? (
                        <div className="border border-[#000070] w-[500px] min-w-[500px] p-[20px] m-[10px] mb-[100vh]">
                            <strong className="text-center flex justify-center">
                                JOB
                            </strong>
                            <strong>Avatar</strong> :{' '}
                            <img src={data.data.photo} />
                            <br />
                            <strong>Name</strong> : {data.data.name}
                            <br />
                            <strong>Categories</strong> : {data.data.categories}
                            <br />
                            <strong>Level</strong> : {data.data.level}
                            <br />
                            <strong>Salary</strong>: {data.data.salary}
                            <br />
                            <strong>Required</strong> : {data.data.required}
                            <br />
                            <strong>Location</strong>: {data.data.location}
                            <br />
                            <strong>Description</strong>:{' '}
                            {data.data.description &&
                                parse(data.data.description)}
                            <br />
                        </div>
                    ) : (
                        <div className="border border-[#000070] w-[500px] min-w-[500px] p-[20px] m-[10px] mb-[100vh]">
                            <strong className="text-center flex justify-center">
                                COMPANY
                            </strong>
                            <br />
                            <strong>Avatar</strong> :{' '}
                            <img src={data.data.photo} />
                            <br />
                            <strong>Name</strong> : {data.data.name}
                            <br />
                            <strong>Description</strong>:{' '}
                            {data.data.description &&
                                parse(data.data.description)}
                            <br />
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default AdminViewRequest;
