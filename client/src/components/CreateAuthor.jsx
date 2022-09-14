import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// components
import AuthorFormData from "./AuthorFormData";

const CreateAuthor = () => {
  const [author, setAuthor] = useState("");
  let navigate = useNavigate();
  const createNewAuthor = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", { author })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='text-center'>
      <Link to='/'>Home</Link>
      <p>Add a new author:</p>
      <form onSubmit={(e) => createNewAuthor(e)}>
        <AuthorFormData setAuthor={setAuthor} Author={author} />
      </form>
    </div>
  );
};

export default CreateAuthor;
