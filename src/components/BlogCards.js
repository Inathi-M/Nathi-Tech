import React from "react";
import { Link } from "react-router-dom";
const BlogCards = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-flex" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">09 Jun, 2023</p>
          <h5 className="title">A beautiful Sunday Morning Renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            beatae quam excepturi officiis ipsa earum nulla eius eos.
          </p>
          <Link to="/" className="button">
            {" "}
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
