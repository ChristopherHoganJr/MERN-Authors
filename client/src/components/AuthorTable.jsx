import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

// components
import AuthorTableRows from "./AuthorTableRows";

const AuthorTable = () => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterRemove = (delAuthor) => {
    setAuthors(authors.filter((author) => author._id !== delAuthor));
  };

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Author</th>
          <th>Actions Available</th>
        </tr>
      </thead>
      <tbody>
        {authors ? (
          authors.map((authorItem) => {
            return (
              <AuthorTableRows
                filterRemove={filterRemove}
                authorItem={authorItem}
                key={authorItem._id}
              />
            );
          })
        ) : (
          <tr>
            <td colSpan='2'>Loading</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default AuthorTable;
