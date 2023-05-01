import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import {
  Account,
  AddBlog,
  Dashboard,
  Details,
  Home,
  Login,
  PageNotFound,
  Profile,
  Register,
} from "./pages";
import LoginOnly from "./pages/LoginOnly";
export const BlogContext = createContext();
export const AdminContext = createContext();

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async ({ publish = false }) => {
    let result;
    if (publish) {
      const { data } = await axios.get("/blogs");
      result = data.filter((item) => item.publish === true);
    } else {
      const { data } = await axios.get("/blogs");
      result = data;
    }
    return result;
  };

  const [users, setUsers] = useState([]);

  const getAllUsers = async (e) => {
    const { data } = await axios.get("/users");
    setUsers(data);
  };

  const localLogin = JSON.parse(localStorage.getItem("localLogin"));
  const [login, setLogin] = useState(localLogin);

  return (
    <>
      <BrowserRouter>
        <BlogContext.Provider
          value={{
            getAllBlogs,
            blogs,
            getAllUsers,
            users,
            login,
            setLogin,
            setBlogs,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog-details/:blogId" element={<Details />} />

            <Route
              path="/user/account"
              element={<LoginOnly element={<Account />} />}
            />
            <Route
              path="/user/profile"
              element={<LoginOnly element={<Profile />} />}
            />
            <Route
              path="/user/add-blog"
              element={<LoginOnly element={<AddBlog />} />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BlogContext.Provider>

        <AdminContext.Provider value={{ getAllUsers, users }}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </AdminContext.Provider>
      </BrowserRouter>
    </>
  );
}
