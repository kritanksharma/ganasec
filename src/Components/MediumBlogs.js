import React, { useState, useEffect } from "react";
import "./styles.css";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import axios from "axios";

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

export default function MediumBlogs({ blogs, blogLimit, isShortPreview }) {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@subhajitsaha0x");

        if (response && response.data) {
          const data = response.data;
          setFetchedBlogs(data.items.slice(0, blogLimit));
        }
      } catch (error) {
        setError("Error fetching Blogs.");
        console.error("Error fetching Blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [blogLimit]);

  if (loading) {
    return <div className="container text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="container text-center mt-5">{error}</div>;
  }

  return (
    <div className={`pt-5 bg-${isShortPreview ? "dark" : "light"} text-light p-4 custom-pl`}>
      <p className={`card-title text-${isShortPreview ? "light" : "dark"} display-5 text-start mb-5`}>{blogs.caption}</p>
      {isShortPreview ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-md-5 mb-5 ml-5 text-start">
            <p className="badge text-bg-primary text-start">{blogs.badge}</p>
            <h1 className="text-start fw-bold display-3 text-secondary">{blogs.title}</h1>
            <p className="mb-4 fs-6 text-secondary text-start my-5">{blogs.description}</p>
          </div>
          {fetchedBlogs.map((blog) => (
            <div key={blog.guid} className="col-md-2 my-2">
              <div className="card bg-light border-1 shadow-lg overflow-hidden card-hover-animation" style={{ border: "none", minWidth: "350px" }}>
                <img src={blogs.image} className="card-img-top" alt={blogs.title} style={{ background: "#E6E6E6" }} />
                <div className="card-body">
                  <h5 className="card-title text-start">{`${blog.title.substring(0, 30)}...`}</h5>
                  <div className="card-text text-secondary text-start">
                    <span className="card-text text-secondary text-start" dangerouslySetInnerHTML={{ __html: truncateHTML(blog.description, 100) }} />
                    <Link to={blog.link} style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                      <div className="card-text fs-6 active-color py-2">
                        ReadMore
                        <Icon path={blogs.linkIcon} size={1} color="#378CE7" className="mx-1 p-1" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="m-2 p-2">
          <div className="row my-4">
            {fetchedBlogs.map((blog, index) => (
              <div key={index} className="col-md-6 my-3">
                <div className="card bg-light border-0 shadow-lg overflow-hidden card-hover-animation">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={blogs.image} className="card-img rounded-0 p-4" alt={blogs.title} style={{ background: "#E6E6E6", height: "100%" }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-start mt-4">{`${blog.title.substring(0, 35)}...`}</h5>
                        <div className="card-text text-secondary text-start">
                          <span
                            className="card-text text-secondary text-start"
                            dangerouslySetInnerHTML={{
                              __html: truncateHTML(blog.description, 200),
                            }}
                          ></span>
                          <Link to={blog.link} style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <div className="card-text fs-6 active-color py-1">
                              ReadMore
                              <Icon path={blogs.linkIcon} size={1} color="#378CE7" className="mx-1 p-1" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
