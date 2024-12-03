
import React from "react";

const BlogCard = ({ category, title, description, author, date, image }) => {
  return (
    <div className="blog-card">
      <img src="http://idoxaaj.sufydely.com/Image.png" alt={title} className="blog-image" />
      <div className="blog-content">
        <span className="category">{category}</span>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <div className="author">
          <img src={author.image} alt={author.name} className="author-image" />
          <div>
            <span className="author-name">{author.name}</span>
            <span className="date">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
