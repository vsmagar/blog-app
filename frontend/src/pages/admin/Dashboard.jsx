import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../App";

export default function Dashboard() {
  const [userBlogs, setUserBlogs] = useState([]);
  const [active, setActive] = useState();
  const { getAllUsers, users } = useContext(AdminContext);
  const getUserBlogs = async (id) => {
    const { data } = await axios.get("/blogs");
    const filterData = data.filter((item) => item.userId === id);
    setUserBlogs(filterData);
    setActive(id);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {users.map((item) => (
              <div class="card">
                <div class={`card-body ${item.id === active && "bg-success"}`}>
                  <h2>{item.name}</h2>
                  <button
                    onClick={(e) => getUserBlogs(item.id)}
                    type="button"
                    class="btn btn-warning"
                  >
                    Show Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-4">
            {userBlogs.map((item) => (
              <div className="card">
                <div className="card-body">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="col-sm-4"> </div>
        </div>
      </div>
    </>
  );
}
