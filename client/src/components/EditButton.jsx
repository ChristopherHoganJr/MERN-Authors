import React from "react";
import { useNavigate } from "react-router-dom";

const EditButton = ({ authorId }) => {
  const navigate = useNavigate();
  const editAuthor = (id) => {
    navigate("/edit/" + id);
  };
  return (
    <button onClick={() => editAuthor(authorId)} className="me-2">
      EditButton
    </button>
  );
};

export default EditButton;
