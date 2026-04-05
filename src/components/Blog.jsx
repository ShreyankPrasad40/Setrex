"use client";

import styles from "./Blog.module.css";
import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";

const blogData = [
  {
    id: 1,
    title: "How to build processes and systems that create a data-driven culture.",
    date: "Sep 6, 2025",
    author: "John Smith",
    authorImage: "/blog-images/author1.png",
    image: "/blog-images/blog1.png"
  },
  {
    id: 2,
    title: "Creating a Data-Driven Organization: Systems, Processes.",
    date: "Sep 6, 2025",
    author: "Evelyn Parker",
    authorImage: "/blog-images/author2.png",
    image: "/blog-images/blog2.png"
  },
  {
    id: 3,
    title: "Building a Culture Where Data Drives Every Decision.",
    date: "Sep 6, 2025",
    author: "Lucas Morgan",
    authorImage: "/blog-images/author3.png",
    image: "/blog-images/blog3.png"
  }
];

export default function Blog() {
  return (
    <section className={styles.blogContainer}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>Recent blog updates</h2>
          <p className={styles.subtitle}>
            Fintech is its potential to promote financial inclusion. In many parts of the world, 
            millions of people lack access to traditional banking services.
          </p>
        </div>
        <a href="#" className={styles.seeAllBtn}>
          See All Blogs
        </a>
      </header>

      <div className={styles.blogGrid}>
        {blogData.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <div className={styles.imageWrapper}>
              <img src={blog.image} alt={blog.title} className={styles.blogImage} />
            </div>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <HiOutlineCalendar size={16} />
                <span>{blog.date}</span>
              </div>
              <div className={styles.metaItem}>
                <img src={blog.authorImage} alt={blog.author} className={styles.avatar} />
                <span className={styles.authorName}>{blog.author}</span>
              </div>
            </div>
            <h3 className={styles.blogTitle}>{blog.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
