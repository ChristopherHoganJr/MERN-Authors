import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// components
import AuthorFormData from "./AuthorFormData";

const CreateAuthor = () => {
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();
  const createNewAuthor = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", { author })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
        console.log(errors);
      });
  };
  return (
    <div className="text-center">
      <Link to="/">Home</Link>
      <p>Add a new author:</p>
      <form onSubmit={(e) => createNewAuthor(e)}>
        {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
        <AuthorFormData setAuthor={setAuthor} Author={author} />
      </form>
    </div>
  );
};

export default CreateAuthor;
