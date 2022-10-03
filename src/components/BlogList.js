import { Link } from "react-router-dom";
const BlogList = (props) => {
  const blogs = props.blogs.map((blog, index) => {
    return (
      <div className="blog-preview">
        <Link to={`/blog/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </Link>
      </div>
    );
  });

  return <div className="blog-list">{blogs}</div>;
};

export default BlogList;
