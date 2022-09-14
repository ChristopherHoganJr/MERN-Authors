import React from "react";
import { Link } from "react-router-dom";

//components
import AuthorTable from "./AuthorTable";

const AuthorList = () => {
  return (
    <div className='text-center'>
      <Link to='/new'>Add an author</Link>
      <p>We have quotes by:</p>
      <AuthorTable />
    </div>
  );
};

export default AuthorList;
