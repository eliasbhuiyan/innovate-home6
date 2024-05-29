import React from "react";

const BlogItems = () => {
  return (
    <div className="flex gap-20">
      <div>
        <img src="/blog-1.png" alt="" />
      </div>
      <div>
        <ul className="flex gap-8 text-secondary">
          <li>
            <a className="hover:text-brand cursor-pointer">News</a>
          </li>
          <li>
            <a className="hover:text-brand cursor-pointer">By Tomas Nikelson</a>
          </li>
          <li>
            <a className="hover:text-brand cursor-pointer">Posted</a>
          </li>
          <li>
            <a className="hover:text-brand cursor-pointer"> 5 Hours Ago</a>
          </li>
        </ul>
        <h3 className="text-3xl text-primary font-bold w-[550px] py-4">
          Punto Pago Allows Quick And Secure Payments For Services In Panama
        </h3>
        <a
          href=""
          className="readMore text-xl font-bold text-primary px-3 relative after:absolute after:right-0 after:-top-1 after:w-7 after:h-10 after:bg-[#19bf0051] after:-z-10 after:rounded-r-full hover:after:w-full hover:after:rounded-l-full after:transition-all"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogItems;
