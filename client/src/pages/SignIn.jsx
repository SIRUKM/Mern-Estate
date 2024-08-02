import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { set } from "mongoose";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data);
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  // console.log(formData);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="mt-5 text-center">
        <p>Dont have an account?</p>

        <Link to="/sign-up">
          <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
            Sign Up
          </span>
        </Link>
      </div>
      {error && <p className="text-red-500 text-center mt-5">{error}</p>}
    </div>
  );
}
