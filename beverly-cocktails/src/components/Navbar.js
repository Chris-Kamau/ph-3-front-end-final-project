import { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">The Cocktail Coaster </a>
        <button
    
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
        <NavLink to="/"href="#"></NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to="/products" className="nav-link active" aria-current="page" href="#" >Products</NavLink>
           </li>
            <li className="nav-item">
            <NavLink to="/table" className="nav-link active" aria-current="page" href="#" >Table</NavLink>
            </li>
            <li className="nav-item">
              <span className="navbar-text mx-auto">Place your order: 0722179020</span>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;