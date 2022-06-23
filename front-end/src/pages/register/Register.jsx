import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import * as registerService from '../../api/register';

function Register({ onShowRegister, onShowLogin }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isWaitingResult, setIsWaitingResult] = useState(false);
    const [registerResult, setRegisterResult] = useState([]);

    const handleRegister = (e) => {
        e.preventDefault();
        try {
            const registerInfo = {
                firstName,
                lastName,
                username,
                password,
                confirmPassword,
                email,
                phone,
            };
            const fetch = () => {
                setIsWaitingResult(true);
                // Gọi api và chỉ định chờ 2 giây cho response
                const promise = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(registerService.register(registerInfo));
                    }, 2000);
                })
                    .then((data) => {
                        if (
                            !data.errorStatus &&
                            data.errorStatus !== undefined
                        ) {
                            onShowLogin();
                            onShowRegister();
                        }
                        setRegisterResult(data);
                    })
                    .catch((err) => console.log(err))
                    .finally(() => setIsWaitingResult(false));
            };
            fetch();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div class="flex items-center justify-center w-[100vw] md:w-[auto]">
            <div class="px-8 py-6 mx-4 mt-6 mb-6 text-left bg-white shadow-lg min-w-[100%]">
                <AiOutlineClose
                    className="ml-[auto] cursor-pointer text-[20px]"
                    onClick={() => onShowRegister()}
                />
                <h3 class="text-2xl font-bold text-center">
                    Job seekers register for an account
                </h3>
                <form action="">
                    <div class="mt-4">
                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full md:w-1/2 px-3 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name"
                                >
                                    First Name
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text"
                                    placeholder="First name"
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-last-name"
                                >
                                    Last Name
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text"
                                    placeholder="Last name"
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div class="mt-2">
                            <label class="block" for="email">
                                Account name:
                            </label>
                            <input
                                type="text"
                                placeholder="Email address"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div class="mt-4">
                            <label class="block" for="email">
                                Email address:
                            </label>
                            <input
                                type="text"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="mt-3">
                            <label class="block" for="email">
                                Phone number:
                            </label>
                            <input
                                type="text"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div class="mt-3">
                            <label class="block">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div class="mt-3">
                            <label class="block">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </div>
                        {registerResult.errorStatus && (
                            <div className=" text-[red] text-center mt-[20px]">
                                {typeof registerResult.dataError
                                    .errorMessage === 'object'
                                    ? registerResult.dataError.errorMessage.join(
                                          ', ',
                                      )
                                    : registerResult.dataError.errorMessage}
                            </div>
                        )}
                        <div class="flex">
                            {!isWaitingResult ? (
                                <button
                                    class="w-full mx-auto px-3 py-2 mt-5 text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900"
                                    onClick={(e) => handleRegister(e)}
                                >
                                    Create Account
                                </button>
                            ) : (
                                <button
                                    class="w-full mx-auto px-3 py-2 mt-5 text-center text-white bg-blue-800 rounded-lg opacity-40"
                                    disabled
                                >
                                    Create Account
                                </button>
                            )}
                        </div>
                        <div class="flex justify-center mt-4 text-grey-dark">
                            <label className="font-bold">
                                Already have an account?
                            </label>
                            <div
                                class="text-blue-600 hover:underline cursor-pointer"
                                onClick={() => {
                                    onShowLogin();
                                    onShowRegister();
                                }}
                            >
                                Log in
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative">
                            <button class="w-full mx-auto  px-3 py-2 mt-5 text-center text-white bg-blue-900 rounded-lg hover:bg-blue-900">
                                Are you a recruiter?
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;
