import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../helper/useFetch";
const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && error}
      {loading && !error && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} key="1" />}
    </div>
  );
};

export default Home;
