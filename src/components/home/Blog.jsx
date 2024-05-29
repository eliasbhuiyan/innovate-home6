import React from "react";
import BlogItems from "./BlogItems";

const Blog = () => {
  return (
    <section className="py-100">
      <div className="container">
        <div className="w-fit m-auto">
          <h2 className="text-primary text-5xl font-bold w-fit mb-16">
            You May Also Like
          </h2>
          <div className="flex flex-col gap-16">
            <BlogItems />
            <BlogItems />
            <BlogItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
