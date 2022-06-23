import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../features/auth/Login";
import Register from "../../features/auth/Register";
import Home from "../../features/home/Home";
import Menu from "../../features/menu/Menu";
import Post from "../../features/post/Post";
import Posts from "../../features/post/Posts";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container className="py-4">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}
