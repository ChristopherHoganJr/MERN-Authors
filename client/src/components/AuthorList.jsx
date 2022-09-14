import React from "react";

//components
import AuthorTable from "./AuthorTable";

const AuthorList = () => {
  return (
    <div>
      <p>Add an author</p>
      <p>We have quotes by:</p>
      <AuthorTable />
    </div>
  );
};

export default AuthorList;
