import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import { loginUser } from '../../redux/apiRequest';

function Login({ onShowRegister, onShowLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [loginResult, setLoginResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const userInfor = {
            username,
            password,
        };
        setLoading(true);
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(loginUser(userInfor, dispatch));
            }, 2000);
        })
            .then((data) => {
                if (!data.errorStatus && data.errorStatus !== undefined) {
                    onShowLogin();
                }
                setLoginResult(data);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
        // Redux
    };

    return (
        <div className="container mx-auto bg-white w-[100vw] md:w-[auto]">
            <div className="md:grid md:grid-cols-2 mx-auto my-auto">
                <div className="border-2 mx-5 md:max-w-full md:mx-0">
                    <div className="text-center py-3">
                        <h1 className="font-bold text-3xl text-blue-700">
                            WELCOME BACK
                        </h1>
                        <label className="text-base ">
                            welcome back! Please enter your details
                        </label>
                    </div>
                    <form className="container w-4/5 mx-auto pb-5">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Enter your email"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {loginResult.errorStatus && (
                            <span className="mb-4 text-center text-[14px] text-[red]">
                                {loginResult.message}
                            </span>
                        )}
                        <div className="flex flex-col md:flex-row">
                            <div className="mb-1 flex-1 md:mb-6">
                                <input type="checkbox" />
                                <label className="pl- text-xs md:text-sm md:pl-3">
                                    Remember me
                                </label>
                            </div>
                            <div className="mb-5">
                                <a
                                    className="inline-block align-baseline font-bold text-blue-500 hover:text-blue-800 text-xs md:text-sm"
                                    href="#"
                                >
                                    Forgot password
                                </a>
                            </div>
                        </div>
                        <div className="h-full items-center justify-between">
                            {loading ? (
                                <Button
                                    className="w-full bg-blue-700 text-white rounded-lg h-7 md:h-10"
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
                                            class="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            stroke-width="4"
                                        ></circle>
                                        <path
                                            class="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                </Button>
                            ) : (
                                <Button
                                    className="w-full bg-blue-700 text-white rounded-lg h-7 md:h-10"
                                    type="button"
                                    onClick={(e) => handleLogin(e)}
                                >
                                    Sign In
                                </Button>
                            )}
                            <Button
                                className="mt-5 w-full bg-white-700 text-white rounded-lg border border-black h-7 md:h-10"
                                type="button"
                            >
                                Sign In with google
                            </Button>
                        </div>
                    </form>
                    <div className="text-center font-medium mb-[10px]">
                        Not a member?&nbsp;
                        <span
                            className="text-[#000070] cursor-pointer hover:underline"
                            onClick={() => {
                                onShowRegister();
                                onShowLogin();
                            }}
                        >
                            Signup now
                        </span>
                    </div>
                </div>

                <div className="border-2 md:max-w-full ">
                    <img
                        className="w-0 md:bg-contain md:bg-center md:h-full md:w-full object-cover"
                        src="https://www.kynang.edu.vn/wp-content/uploads/giao-tiep-voi-moi-nguoi.jpg"
                    />
                </div>
            </div>
        </div>
    );
}
export default Login;
