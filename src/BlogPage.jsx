
import React from "react";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const blogs = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: {
        name: "Olivia Rhye",
        image: "http://idoxaaj.sufydely.com/Avatar%20(1).png",
      },
      date: "20 Jan 2024",
      image: "http://idoxaaj.sufydely.com/Image.png",
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: {
        name: "Phoenix Baker",
        image: "http://idoxaaj.sufydely.com/Avatar%20(2).png",
      },
      date: "19 Jan 2024",
      image: "http://idoxaaj.sufydely.com/Image%20(3).png",
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: {
        name: "Lana Steiner",
        image: "http://idoxaaj.sufydely.com/Avatar%20(3).png",
      },
      date: "18 Jan 2024",
      image: "http://idoxaaj.sufydely.com/Avatar%20(3).png",
    },
  ];

  return (
    <div className="blog-page">
      <header id="headblog">
        <div>
        <h2>Our Blog</h2>
        <h1>Latest Blog Posts</h1>
       
        <p>Tools and strategies modern teams need to help their companies grow.</p>
        </div>
        <div>
        <button className="view-all">View all posts</button>
        </div>
      </header>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
