import React from "react";

// components
import AuthorTableRows from "./AuthorTableRows";

const AuthorTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          <AuthorTableRows authorName={"Bill Bryson"} />
          <AuthorTableRows authorName={"Ada Lovelace"} />
        </tbody>
      </table>
    </div>
  );
};

export default AuthorTable;
