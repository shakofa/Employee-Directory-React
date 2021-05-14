import React from "react";
import "../Styles/Search.css";
import{ Button} from "react-bootstrap";

function Search({ handleSearchChange }) {
  return (
    <div className="search">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
        <Button onClick={handleSearchChange} variant="outline-black">Search</Button>
      </form>
      
    </div>
  );
}
export default Search;
