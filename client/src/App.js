import "./App.css";

import { Routes, Route } from "react-router-dom";

// components
import AuthorList from "./components/AuthorList";

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Routes>
        <Route path="/" element={<AuthorList />} />
      </Routes>
    </div>
  );
}

export default App;
