import React from "react";

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.id}</h3>
      <p>{ticket.title}</p>
      <p className="tag">{ticket.tag}</p>
    </div>
  );
};

export default TicketCard;
