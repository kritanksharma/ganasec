import React from "react";
import "./styles.css"; // Import the CSS file
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

export default function Blogs({ blogs }) {
  return (
    <div className="pt-5 bg-dark text-light p-4">
      <p className="card-title text-light display-5 text-start">{blogs.title}</p>
      <p className="mb-4 fs-6 fw-bold text-secondary text-start mb-5">{blogs.description}</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {blogs.list.map((blog, index) => (
          <div key={index} className="col">
            <div className="card h-100 card-hover-animation" style={{ background: "#1A1C23" }}>
              <img src={blog.image} className="card-img-top text-light" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title text-light text-start">{blog.title}</h5>
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
