import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../App";

export default function Home() {
  const { getAllBlogs, blogs, setBlogs } = useContext(BlogContext);
  const x = async () => {
    const data = await getAllBlogs({ publish: true });
    console.log(data);
    setBlogs(data);
    // getAllBlogs();
  };
  useEffect((e) => {
    x();
  }, []);
  return (
    <>
      <div>home</div>
      {/* {JSON.stringify(blogs)} */}
      <div className="container">
        <div className="row">
          {blogs.map((item) => (
            <div className="col-sm-6" key={item.title}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt="" />
                <div>
                  <p className="text-muted text-end my-3 pe-4">
                    Read time {item.readTime}
                  </p>
                  <h1>{item.title}</h1>
                  <Link to={`/blog-details/${item.id}`}>Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
