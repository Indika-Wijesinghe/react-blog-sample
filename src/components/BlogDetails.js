import { useParams } from "react-router-dom";
import useFetch from "../helper/useFetch";
import { useHistory } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();

  const { data, loading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  function deleteBlog() {
    fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  }

  return (
    <div className="blog-details">
      {loading && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </article>
      )}
      <button onClick={deleteBlog}>Delete Blog</button>
    </div>
  );
}
