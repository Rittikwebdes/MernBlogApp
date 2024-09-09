import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Slidebar from "../dashboard/Slidebar";

import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import Updateblog from "../dashboard/Updateblog";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blogs");
  console.log(profile);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <div>
        <Slidebar component={component} setComponent={setComponent} />
        { component === "Create Blog" ? (
          <CreateBlog />
        ) : component === "Update blog" ? (
          <Updateblog />
        ) : (
          <MyBlogs />
        )}
      </div>
    </div>
  );
}

export default Dashboard;