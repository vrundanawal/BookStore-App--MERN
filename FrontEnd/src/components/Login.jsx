import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById('my_modal_3').close()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
                <br />

                <span className="text-sm text-red-500">
                  This field is required
                </span>
              </div>
              {/* password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
                <br />

                <span className="text-sm text-red-500">
                  This field is required
                </span>
              </div>

              {/* Button */}
              <div className="flex justify-around mt-6">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
                <div>
                  Not registered?
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer px-2"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
