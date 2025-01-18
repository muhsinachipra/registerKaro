// task-management-app\src\components\TaskFilter.js

import React from "react";

function TaskFilter({ filter, setFilter, sort, setSort }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </label>
      <label style={{ marginLeft: "20px" }}>
        Sort:
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="Date">Creation Date</option>
          <option value="Priority">Priority</option>
        </select>
      </label>
    </div>
  );
}

export default TaskFilter;