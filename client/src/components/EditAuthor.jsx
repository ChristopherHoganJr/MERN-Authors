import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// components
import AuthorFormData from "./AuthorFormData";

const EditAuthor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [testAuthor, setTestAuthor] = useState("");
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        setAuthor(res.data.author);
        setTestAuthor(res.data.author);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitEditAuthor = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${id}`, { author: testAuthor })
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
      <p>Edit this author:</p>
      {author ? (
        <form onSubmit={(e) => submitEditAuthor(e)}>
          {errors.map((err, index) => (
            <p key={index}>{err}</p>
          ))}
          <AuthorFormData setAuthor={setTestAuthor} Author={testAuthor} />
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditAuthor;
