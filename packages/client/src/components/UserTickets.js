import React, { useState, useEffect } from "react";

const UserTickets = () => {
	const [tickets, setTickets] = useState([]);
	const [newTicket, setNewTicket] = useState({
		title: "",
		description: "",
		status: "open",
	});
	const [ticketCounter, setTicketCounter] = useState(1);

	useEffect(() => {
		if (tickets.length > 0) {
			const lastTicket = tickets[tickets.length - 1];
			lastTicket.id = `TPD#ABC${("0000" + ticketCounter).slice(-5)}`;
			setTicketCounter(ticketCounter + 1);
		}
	}, [tickets]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNewTicket({
			...newTicket,
			[name]: value,
		});
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		setTickets([...tickets, newTicket]);
		setNewTicket({
			title: "",
			description: "",
			status: "open",
		});
	};

	return (
		<div>
			<h1>Ticket Tracker</h1>
			<form onSubmit={handleFormSubmit}>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					name="title"
					value={newTicket.title}
					onChange={handleInputChange}
				/>
				<br />
				<label htmlFor="description">Description:</label>
				<textarea
					name="description"
					value={newTicket.description}
					onChange={handleInputChange}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			<hr />
			<h2>Tickets:</h2>
			{tickets.map((ticket, index) => (
				<div key={index}>
					<h3>{ticket.title}</h3>
					<p>{ticket.description}</p>
					<p>Status: {ticket.status}</p>
					<p>ID: {ticket.id}</p>
				</div>
			))}
		</div>
	);
};

export default UserTickets;
