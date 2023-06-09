import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button onClick={props.addNote} className="add-new">
          + New Note
        </button>
        <input
          onChange={props.onSearch}
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
        />
        {/* {console.log(props.searchText)} */}
      </aside>
    </header>
  );
};

export default Header;
