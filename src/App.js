import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error("Failed to fetch tickets", error);
    }
  };

  return (
    <div className="app">
      <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
