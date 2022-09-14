import React from "react";
import axios from "axios";

const DeleteButton = ({ authorId, filterRemove }) => {
  const deleteItem = (id) => {
    axios
      .delete("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        console.log(res.data);
        filterRemove(id);
      })
      .catch((err) => console.log(err));
  };

  return <button onClick={() => deleteItem(authorId)}>DeleteButton</button>;
};

export default DeleteButton;
