import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="border p-3 rounded-lg"
        />
        <button
          disabled
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase hover:opacity-95 disabled:opacity-80"
        >
          Create Account
        </button>
      </form>
      <div className="mt-5 text-center">
        <p>Already have an account?</p>

        <Link to="/sign-in">
          <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
            Sign in
          </span>
        </Link>
      </div>
    </div>
  );
}
