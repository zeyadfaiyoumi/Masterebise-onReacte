import { Link } from "react-router-dom";
import Butoon from "../componants/Butoon";
import NEWlogo from "../assets/NEWlogo.png";

function Login() {
  return (
    <>
      <section className="bg-[url('/src/assets/sign-bg.jpg')] bg-no-repeat bg-cover bg-center dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12">
        <Link to="/">
          <img
            src={NEWlogo}
            className="h-36 w-40 mb-6 transition-transform duration-300 hover:scale-110"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="w-full max-w-md p-6 bg-white bg-opacity-75 backdrop-blur-md rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700 mb-24 transition-shadow duration-300 hover:shadow-2xl">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-6 text-center">
            تسجيل الدخول
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@gmail.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>
            <Butoon
              name="تسجيل الدخول"
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 hover:scale-105"
            />
            <p className="text-sm font-normal text-gray-900 dark:text-gray-400 flex justify-center">
              ليس لديك حساب بالفعل؟{" "}
              <Link
                to="/Signup"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                إنشاء حساب
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
