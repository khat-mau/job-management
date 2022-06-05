// impo

function register() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mx-4 mt-6 mb-6 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 class="text-2xl font-bold text-center">Job seekers register for an account</h3>
        <form action="">
          <div class="mt-4">
            <div className="flex flex-wrap -mx-3 ">
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="First name" />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Last name" />
              </div>
            </div>
            <div class="mt-2">
              <label class="block" for="email">Account name:</label>
              <input type="text" placeholder="Email address"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div class="mt-4">
              <label class="block" for="email">Email address:</label>
              <input type="text"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div class="mt-3">
              <label class="block" for="email">Phone number:</label>
              <input type="text"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div class="mt-3">
              <label class="block">Password</label>
              <input type="password" placeholder="Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div class="mt-3">
              <label class="block">Confirm Password</label>
              <input type="password" placeholder="Confirm Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div class="flex">
              <button class="w-full mx-auto px-3 py-2 mt-5 text-center text-white bg-blue-800 rounded-lg hover:bg-blue-900">Create
                Account</button>
            </div>
            <div class="flex justify-center mt-4 text-grey-dark">
              <label className="font-bold">Already have an account?</label>
              <a class="text-blue-600 hover:underline" href="fap.edu.vn">
                Log in
              </a>
            </div>
          </div>
          <div>
            <div class="relative">
              <button class="w-full mx-auto  px-3 py-2 mt-5 text-center text-white bg-blue-900 rounded-lg hover:bg-blue-900">Are you a recruiter?</button>
            </div>
          </div>

        </form>
      </div>

    </div>
  );
}
export default register;
