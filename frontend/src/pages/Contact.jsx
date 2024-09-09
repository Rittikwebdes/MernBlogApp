import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import toast from 'react-hot-toast';
import axios from "axios";
import { BACK_END_URL } from "../utils";

export default function Contact() {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACK_END_URL}/contact/message`,{name,email,message

        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
 
      );
      toast.success(response.data.message);
    
     setName("");
     setEmail("");
     setMessage("");
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div>
        <div className=" min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full space-y-8 bg-blue-100 p-10 rounded-lg shadow-lg">
            <div className="flex items-center justify-center ">
              <img src="logo.png" className="w-[60px]" />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Contact Us
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit}  className="space-y-4">
                  <div>
                    <input
                    value={name}
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600 duration-300 "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-full md:w-1/2 md:pl-4">
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2">
                    <FaPhone className="text-red-500" />
                    <span>+91 7876630370</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaEnvelope className="text-pink-500" />
                    <span>rittikchauhan8112002@gmail.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-green-500" />
                    <span>Sirmaur, Himachal Pradesh , India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
