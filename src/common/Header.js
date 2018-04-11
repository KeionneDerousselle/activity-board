import React from 'react';
import TextInput from './TextInput';

const Header = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top justify-content-between">
    <div className="row w-100">
      <div className="d-none d-md-block col-md-2">
        <a className="navbar-brand" href="#">Activity Board</a>
      </div>
      <div className="col-12 col-md-10">
        <form className="my-auto d-inline w-100">
          <div className="input-group">
            <TextInput
              type="search"
              name="search-bar"
              label="Search Activities"
              placeholder="Search Activities"
              onChange={(name, value) => console.log(`${name} : ${value}`)}
            />
            <div className="input-group-btn">
              <button
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Title
              </button>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Title</a>
                <a href="#" className="dropdown-item">Price Range</a>
                <a href="#" className="dropdown-item">Category</a>
                <a href="#" className="dropdown-item">Location</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>;

export default Header;
