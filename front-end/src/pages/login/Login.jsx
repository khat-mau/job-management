<link href="/dist/output.css" rel="stylesheet"></link>;
// import ababa from '../img/imgLogin.png';

function Login({}) {
    return (
            <div className="container mx-auto mt-40">
                <div className="md:grid md:grid-cols-2 mx-auto my-auto">
                    <div className="border-2 mx-5 md:max-w-full md:mx-0" >
                        <div className="text-center py-3">
                            <h1 className="font-bold text-3xl text-blue-700">WELCOME BACK</h1>
                            <label className="text-base ">welcome back! Please enter your details</label>
                        </div>
                        <form className="container w-4/5 mx-auto pb-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your email" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <div className="mb-1 flex-1 md:mb-6">
                                    <input type="checkbox" />
                                    <label className="pl- text-xs md:text-sm md:pl-3">
                                        Remember me
                                    </label>
                                </div>
                                <div className="mb-5">
                                    <a className="inline-block align-baseline font-bold text-blue-500 hover:text-blue-800 text-xs md:text-sm" href="#">
                                    Forgot password
                                    </a>
                                </div>
                            </div>
                            <div className="h-full items-center justify-between">
                                <button className="w-full bg-blue-700 text-white rounded-lg h-7 md:h-10" type="button">
                                    Sign In
                                </button>
                                <button className="mt-5 w-full bg-white-700 text-black rounded-lg border border-black h-7 md:h-10" type="button">
                                    Sign In with google
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="border-2 md:max-w-full" >
                            <img className="w-0 md:bg-contain md:bg-center md:h-full md:w-full" src="https://www.kynang.edu.vn/wp-content/uploads/giao-tiep-voi-moi-nguoi.jpg" />
                    </div>

                </div>
            </div>
    );
}
export default Login;