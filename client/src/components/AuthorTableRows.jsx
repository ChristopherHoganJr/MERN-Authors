import React from "react";

// components
import AuthorTableButton from "./AuthorTableButton";

const AuthorTableRows = ({ authorName }) => {
  return (
    <tr>
      <td>{authorName}</td>
      <td>
        <AuthorTableButton buttonType={"Edit"} />
        <AuthorTableButton buttonType={"Delete"} />
      </td>
    </tr>
  );
};

export default AuthorTableRows;
