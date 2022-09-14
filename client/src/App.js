import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// components
import AuthorList from "./components/AuthorList";
import CreateAuthor from "./components/CreateAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
  return (
    <div className='App'>
      <Container>
        <Navbar className='d-flex justify-content-center'>
          <h1>Favorite authors</h1>
        </Navbar>
        <Row>
          <Col className='d-flex justify-content-center'>
            <Routes>
              <Route path='/' element={<AuthorList />} />
              <Route path='/new' element={<CreateAuthor />} />
              <Route path='/edit/:id' element={<EditAuthor />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
