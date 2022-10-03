import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Create() {
  const [formData, setFormData] = useState({ title: "", body: "", author: "" });
  const history = useHistory();

  function handleOnChange(e) {
    setFormData((preFormData) => {
      return { ...preFormData, [e.target.name]: e.target.value };
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {
      console.log("blog added");
      history.push("/");
    });
  }
  return (
    <>
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="">Blog title</label>
          <input
            type="text"
            name="title"
            required
            onChange={handleOnChange}
            value={formData.title}
          />
          <label htmlFor="">Blog body:</label>
          <textarea
            name="body"
            id=""
            cols="30"
            rows="10"
            required
            onChange={handleOnChange}
            value={formData.body}
          />
          <label htmlFor="">Blog author:</label>
          <select
            name="author"
            id=""
            onChange={handleOnChange}
            value={formData.author}
            required
          >
            <option value="">--Select Author--</option>
            <option value="mario">mario</option>
            <option value="yoshi">Yoshi</option>
            <button>Add Blog</button>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
