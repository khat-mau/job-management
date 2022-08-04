import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { showLogin } from '../redux/authSlice';

const Auth = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showLogin());
    }, []);

    return <Navigate to={-1} />;
};

export default Auth;
