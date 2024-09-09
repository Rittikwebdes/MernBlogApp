import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BACK_END_URL } from "../utils";
function Creator() {
  const [admin, setAdmin] = useState([]);
  console.log(admin);
  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(
        `${BACK_END_URL}/api/users/admins`,
        {
          withCredentials: true,
        }
      );
      console.log(data.admins);
      setAdmin(data.admins);
    };
    fetchAdmins();
  }, []);
  return (
    <div className=" container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Popular Creators</h1>
      <div className="flex flex-wrap justify-center items-center  text-center space-y-5">
        {admin && admin.length > 0 ? (
          admin.slice(0, 4).map((element) => {
            return (
              <div key={element._id}>
                <div className="mx-10">
                  <img
                    src={element.photo.url}
                    alt="blog"
                    className="md:w-56 md:h-56 object-cover border border-black rounded-full items-center "
                  />
                  <div className="">
                    <p className="font-bold">{element.name}</p>
                    <p className="text-black text-xs">{element.role}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex h-screen items-center justify-center">
            loading....
          </div>
        )}
      </div>
    </div>
  );
}

export default Creator;
