import React from "react";
import TicketCard from "./TicketCard";

const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
  const groupTickets = () => {
    if (groupBy === "status") {
      return tickets.reduce((groups, ticket) => {
        const group = ticket.status || "No Status";
        groups[group] = groups[group] || [];
        groups[group].push(ticket);
        return groups;
      }, {});
    }

    if (groupBy === "user") {
      return tickets.reduce((groups, ticket) => {
        const user = users.find((user) => user.id === ticket.userId);
        const group = user ? user.name : "Unassigned";
        groups[group] = groups[group] || [];
        groups[group].push(ticket);
        return groups;
      }, {});
    }

    if (groupBy === "priority") {
      return tickets.reduce((groups, ticket) => {
        const priority = ticket.priority || "No Priority";
        groups[priority] = groups[priority] || [];
        groups[priority].push(ticket);
        return groups;
      }, {});
    }

    return {};
  };

  const sortTickets = (group) => {
    return group.sort((a, b) => {
      if (sortBy === "priority") {
        return b.priority - a.priority;
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div className="kanban-column" key={group}>
          <h2>{group}</h2>
          {sortTickets(groupedTickets[group]).map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
