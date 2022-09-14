import React from "react";

// components
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";

const AuthorFormData = ({ setAuthor, Author }) => {
  return (
    <>
      <label>Name:</label>
      <input
        type='text'
        value={Author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <div className='my-3 d-flex gap-3'>
        <CancelButton />
        <SubmitButton />
      </div>
    </>
  );
};

export default AuthorFormData;
