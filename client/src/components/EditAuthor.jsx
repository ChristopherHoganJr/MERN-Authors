import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// components
import AuthorFormData from "./AuthorFormData";

const EditAuthor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        setAuthor(res.data.author);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitEditAuthor = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${id}`, { author })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='text-center'>
      <Link to='/'>Home</Link>
      <p>Edit this author:</p>
      {author ? (
        <form onSubmit={(e) => submitEditAuthor(e)}>
          <AuthorFormData setAuthor={setAuthor} Author={author} />
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditAuthor;
