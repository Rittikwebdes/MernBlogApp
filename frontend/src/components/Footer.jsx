import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <hr />
      <footer className=" py-10">
        <div className="container flex justify-around flex-wrap text-white font-bold ">
          <div className=" text-center ">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-white">
                  Node
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white">
                  Express
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white">
                  MongoDB
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center ">
            <h2 className="text-lg font-semibold mb-4">Structure</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-white">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white">
                  Blogs Create (Admin)
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center ">
            <h2 className="text-lg font-semibold mb-4">Language</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-white">
                  MERN
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white">
                  TAILWIND
                </a>
              </li>
            </ul>
          </div>

         
          <div className=" text-center ">
            <h2 className="text-lg font-semibold mb-4">Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-black hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-black hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/creators" className="text-black hover:text-white">
                  Creators
                </Link>
              </li>
          
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center mb-5 ">
        <div className="text-xl font-semibold hidden md:flex">
<img src="logo.png" className="w-[60px]" />
        </div>
        <div className="text-white  md:flex">
          <p>&copy; 2024 RC Blog's PVT. LTD. All rights reserved</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4 text-white">
          <a href="https://github.com/Rittikwebdes">
            <FaGithub className="h-6" />
          </a>
          <a href="https://www.youtube.com/">
            <BsYoutube className="h-6" />
          </a>

          <a href="https://www.linkedin.com/in/rittik-chauhan-556a28284/">
            <FaLinkedin className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
