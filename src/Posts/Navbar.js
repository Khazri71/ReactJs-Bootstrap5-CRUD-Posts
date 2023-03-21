import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PostsShow from "./PostsShow";
import PostShow from "./PostShow";
import PostEdit from "./PostEdit";
import About from "./About";
import PostAdd from "./PostAdd";
import PostsSearch from "./PostsSearch";
const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ width: 100 + "%" }}
        >
          <div className="container-fluid">
            <Link to="/posts" className="navbar-brand">
              Posts
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts" className="nav-link">
                    Posts
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/post-add" className="nav-link">
                    Add Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/search" className="nav-link">
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<PostsShow />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/post-add" element={<PostAdd />}></Route>
          <Route path="/post-show/:id" element={<PostShow />}></Route>
          <Route path="/post-edit/:id" element={<PostEdit />}></Route>
          <Route path="/search" element={<PostsSearch />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Navbar;
