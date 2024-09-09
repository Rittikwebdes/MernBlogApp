import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import Blogs from "../src/pages/Blogs";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Dashboard from "../src/pages/Dashboard";
import Creators from "../src/pages/Creators";
import { Routes, Route,useLocation, Navigate } from "react-router-dom";
import{useAuth} from "../src/context/AuthProvider";

import  { Toaster } from 'react-hot-toast';
import UpdateBlog from "./dashboard/Updateblog";
import Detail from "./pages/Details";
import NotFound404 from "./pages/NotFound404";




export default function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/dashboard","/login","/register"].includes(location.pathname);

const {blogs, isAuthenticated} = useAuth();
let token = localStorage.getItem("jwt")
console.log(blogs)
console.log(isAuthenticated)




  return (
    <>


<div>

{  !hideNavbarFooter &&  <Navbar />}

<Routes>
  <Route exact path="/" element={ token  ? <Home /> : <Navigate to={"/login"}/>} />
  <Route exact path="/blogs" element={<Blogs />} />
  <Route exact path="/about" element={<About />} />
  <Route exact path="/contact" element={<Contact />} />
  <Route exact path="/login" element={<Login />} />
  <Route exact path="/register" element={<Register />} />
  <Route exact path="/dashboard" element={<Dashboard />} />
  <Route exact path="/creators" element={<Creators />} />

  {/* update page route */}
  <Route exact path="/blog/:id" element={<Detail />} />
  <Route exact path="/blog/update/:id" element={<UpdateBlog />} />

  {/* 404 route */}
  <Route path="*" element={<NotFound404/>}/>
</Routes>
    <Toaster />
{ !hideNavbarFooter &&  <Footer />}

</div>

    </>
  );
}
