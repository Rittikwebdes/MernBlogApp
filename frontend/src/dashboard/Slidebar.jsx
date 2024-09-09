import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import toast from "react-hot-toast";
import { BACK_END_URL } from "../utils";

function Sidebar({ setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  // console.log(profile?.user);
  const navigateTo = useNavigate();

  const [show, setShow] = useState(false);

  const handleComponents = (value) => {
    setComponent(value);
  };
  const gotoHome = () => {
    navigateTo("/");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${BACK_END_URL}/api/users/logout`,
        { withCredentials: true }
      );
      toast.success(data.message);
     
      setIsAuthenticated(false);
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(error.data.message || "Failed to logout");
    }
  };

  return (
    <>
      <div
        className="sm:hidden fixed top-4 left-4 z-50"
        onClick={() => setShow(!show)}
      >
        <CiMenuBurger className="text-2xl" />
      </div>
      <div
        className={`w-64 h-full shadow-xl shadow-black fixed top-0 left-0  py-7 transition-transform duration-300 md:bg-transparent bg-blue-500 transform sm:translate-x-0 ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="sm:hidden absolute top-4 right-4 text-xl cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <BiSolidLeftArrowAlt className="text-2xl" />
        </div>
        <div className="text-center">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-2"
            src={profile?.photo?.url}
            alt=""
          />
          <p className="text-lg font-semibold">{profile?.name}</p>
        </div>
        <ul className="space-y-6 mx-4">
        <button
            onClick={() => handleComponents("My Blogs")}
            className="group relative m-1 w-full cursor-pointer overflow-hidden rounded-md border-2 border-black px-5 py-3 font-mono font-bold"
          >
    <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
    <span className="ease relative text-black transition duration-300 group-hover:text-white">My Blogs</span>
          </button>
          <button
            onClick={() => handleComponents("Create Blog")}
            className="group relative m-1 w-full cursor-pointer overflow-hidden rounded-md border-2 border-black px-5 py-3 font-mono font-bold"
          >
    <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
    <span className="ease relative text-black transition duration-300 group-hover:text-white">Create Blog</span>
          </button>
      
          <button
            onClick={gotoHome}
            className="group relative m-1 w-full cursor-pointer overflow-hidden rounded-md border-2 border-black px-5 py-3 font-mono font-bold"
          >
    <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
    <span className="ease relative text-black transition duration-300 group-hover:text-white">Home</span>
          </button>
          <button
            onClick={handleLogout}
            className="group relative m-1 w-full cursor-pointer overflow-hidden rounded-md border-2 border-black px-5 py-3 font-mono font-bold"
          >
    <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
    <span className="ease relative text-black transition duration-300 group-hover:text-white">Logout</span>
          </button>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;