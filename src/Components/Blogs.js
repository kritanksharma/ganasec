import React from "react";
import "./styles.css"; // Import the CSS file
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

export default function Blogs({ blogs }) {
  return (
    <div className="pt-5 bg-dark text-light p-4">
      <p className="card-title text-light display-5 text-start mb-5">{blogs.caption}</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col-md-4 mb-5 text-start">
      <p class="badge text-bg-primary text-start">{blogs.badge}</p>
      <h1 className="text-start fw-bold display-3 text-secondary">{blogs.title}</h1>
      <p className="mb-4 fs-6 text-secondary text-start my-5">{blogs.description}</p>
      </div>
        {blogs.list.map((blog, index) => (
          <div key={index} className="col-md-2 my-2">
             <div
                className="card bg-light border-1 shadow-lg overflow-hidden card-hover-animation"
                style={{ border: "none" , minWidth : "350px" }}
              >
              <img src={blog.image} className="card-img-top" alt={blog.title}  style={{ background: "#E6E6E6" }} />
              <div className="card-body">
                <h5 className="card-title text-start">{blog.title}</h5>
                <p className="card-text text-secondary text-start">
                  {`${blog.description.substring(0, 100)}...`}
                  <Link to={blog.linkURL} style={{ textDecoration: "none" }}>
                    <p className="card-text fs-6 active-color py-2">
                      ReadMore
                      <Icon path={blog.linkIcon} size={1} color="#378CE7" className="mx-1 p-1" />
                    </p>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
