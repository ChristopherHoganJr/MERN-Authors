import React from "react";

// components
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const AuthorTableRows = ({ authorItem, filterRemove }) => {
  return (
    <tr>
      <td>{authorItem.author}</td>
      <td>
        <EditButton authorId={authorItem._id} />
        <DeleteButton authorId={authorItem._id} filterRemove={filterRemove} />
      </td>
    </tr>
  );
};

export default AuthorTableRows;
