import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskDetail from "./pages/TaskDetail";

function App() {
  return (
    <Router>
      <div>
        <h1>Task Management Application</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;