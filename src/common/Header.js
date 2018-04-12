import React from 'react';
import Input from './Input';
import Button from './Button';

const Header = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top justify-content-between">
    <div className="row w-100">
      <div className="d-none d-md-block col-md-2">
        <a className="navbar-brand" href="#">Activity Board</a>
      </div>
      <div className="col-12 col-md-10">
        <form className="my-auto d-inline w-100">
          <div className="input-group">
            <Input
              type="search"
              name="search-bar"
              label="Search Activities"
              placeholder="Search Activities"
              onChange={(name, value) => console.log(`${name} : ${value}`)}
            />
            <Button />
          </div>
        </form>
      </div>
    </div>
  </nav>;

export default Header;
