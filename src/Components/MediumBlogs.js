import React, { useState, useEffect } from "react";
import "./styles.css";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

// Re-structuring blogs content
const truncateHTML = (html, maxLength) => {
  const div = document.createElement("div");
  div.innerHTML = html;

  let text = div.textContent || div.innerText || "";
  if (text.length > maxLength) {
    text = text.slice(0, maxLength) + "...";
  }

  const truncatedDiv = document.createElement("div");
  truncatedDiv.textContent = text;
  return truncatedDiv.innerHTML;
};

export default function MediumBlogs({ blogs }) {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_BLOG_API);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFetchedBlogs(data.items.slice(0, 3));
      } catch (error) {
        setError("Error fetching Blogs.");
        console.error("Error fetching Blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="container text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="container text-center mt-5">{error}</div>;
  }

  return (
    <div className="pt-5 bg-dark text-light p-4">
      <p className="card-title text-light display-5 text-start mb-5">{blogs.caption}</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-md-4 mb-5 text-start">
          <p className="badge text-bg-primary text-start">{blogs.badge}</p>
          <h1 className="text-start fw-bold display-3 text-secondary">{blogs.title}</h1>
          <p className="mb-4 fs-6 text-secondary text-start my-5">{blogs.description}</p>
        </div>
        {fetchedBlogs.map((blog, index) => (
          <div key={index} className="col-md-2 my-2">
            <div
              className="card bg-light border-1 shadow-lg overflow-hidden card-hover-animation"
              style={{ border: "none", minWidth: "350px" }}
            >
              <img
                src={blogs.image}
                className="card-img-top"
                alt={blogs.title}
                style={{ background: "#E6E6E6" }}
              />
              <div className="card-body">
                <h5 className="card-title text-start">{`${blog.title.substring(0, 30)}...`}</h5>
                <p className="card-text text-secondary text-start">
                  <div
                    className="card-text text-secondary text-start"
                    dangerouslySetInnerHTML={{ __html: truncateHTML(blog.description, 100) }}
                  />
                  <Link
                    to={blog.link}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="card-text fs-6 active-color py-2">
                      ReadMore
                      <Icon path={blogs.linkIcon} size={1} color="#378CE7" className="mx-1 p-1" />
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
