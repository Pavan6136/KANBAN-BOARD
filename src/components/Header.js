import React from "react";

const Header = ({ setGroupBy, setSortBy }) => {
  return (
    <div className="header">
      <h1>Kanban Board</h1>
      <div className="controls">
        <label>
          Group By:
          <select onChange={(e) => setGroupBy(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </label>
        <label>
          Sort By:
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Header;
