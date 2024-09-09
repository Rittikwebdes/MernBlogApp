import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { BACK_END_URL } from "../utils";
function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  console.log(profile);
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${BACK_END_URL}/api/users/logout`,
        { withCredentials: true }
      );
      console.log(data);
      localStorage.removeItem("jwt"); // deleting token in localStorage so that if user logged out it will goes to login page
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <nav className=" shadow-xl shadow-slate-700 px-4 py-2">
        <div className="flex items-center justify-between container mx-auto">
          <div className="">
            <img src="logo.png" alt="logo" className="w-[60px]" />
          </div>
          {/* Desktop */}
          <div className=" mx-6">
            <ul className="hidden md:flex space-x-6 font-bold text-white">
              <Link
                to="/"
                className="hover:underline-offset-2 hover:underline duration-300"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                className="hover:underline-offset-2 hover:underline duration-300"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                className="hover:underline-offset-2 hover:underline duration-300"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                className="hover:underline-offset-2 hover:underline duration-300"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="hover:underline-offset-2 hover:underline duration-300"
              >
                CONTACT
              </Link>
            </ul>
            <div
              className="md:hidden absolute right-1 top-4"
              onClick={() => setShow(!show)}
            >
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
          <div className=" md:flex  flex md:mr-0 mr-6 space-x-2">
            {isAuthenticated && profile?.role === "admin" ? (
              <Link
                to="/dashboard"
                className="group relative inline-block overflow-hidden rounded bg-black  border-double border-purple-500 px-4 py-3 font-medium text-white"
              >
                <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-white opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative group-hover:text-black">
                  Dashboard
                </span>
              </Link>
            ) : (
              ""
            )}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="group relative inline-block overflow-hidden rounded bg-black  border-double border-purple-500 px-4 py-3 font-medium text-white"
              >
                <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-white opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative group-hover:text-black">Login</span>
              </Link>
            ) : (
              <div>
                <button
                  onClick={handleLogout}
                  className="group relative inline-block overflow-hidden rounded bg-black  border-double border-purple-500 px-4 py-3 font-medium text-white"
                >
                  <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-white opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative group-hover:text-black">
                    Logout
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
        {/* mobile navbar */}
        {show && (
          <div className="">
            <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
              <Link
                to="/"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:underline"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:underline"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:underline"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:underline"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:underline"
              >
                CONTACT
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
