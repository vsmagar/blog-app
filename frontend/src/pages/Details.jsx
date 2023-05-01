import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../App";

export default function Details() {
  const { blogId } = useParams();
  const { blogs } = useContext(BlogContext);

  const [data, setData] = useState({});
  useEffect((e) => {
    const blog = blogs.find((item) => item.id == blogId);
    setData(blog);
  }, []);
  return (
    <>
      {/* <h1>{blogId}</h1>
      <div>Details</div>; */}
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="card">
              <img src={data.image} alt="" />
              <h1>{data.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
