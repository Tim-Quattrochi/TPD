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

		if (newTicket.id) {
			const updatedTickets = [...tickets];
			const index = updatedTickets.findIndex(
				(ticket) => ticket.id === newTicket.id,
			);
			updatedTickets[index] = newTicket;
			setTickets(updatedTickets);
		} else {
			setTickets([...tickets, newTicket]);
		}

		setNewTicket({ title: "", description: "", status: "open" });
	};

	const handleEditTicket = (index) => {
		setNewTicket(tickets[index]);
	};

	const handleDeleteTicket = (index) => {
		const updatedTickets = [...tickets];
		updatedTickets.splice(index, 1);
		setTickets(updatedTickets);
	};

	return (
		<div className="bg-#0c2642 flex flex-col">
			<h1>Ticket Tracker</h1>
			<form
				className="bg-#003f5c text-#ffa600 mx-auto w-400"
				onSubmit={handleFormSubmit}
			>
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
			<hr className="bg-#931a51 mx-auto w-400" />
			<h2>Tickets:</h2>
			{tickets.map((ticket, index) => (
				<div key={index} className="bg-#003f5c text-#ffa600 mx-auto w-400">
					<p>
						<h3>{ticket.title}</h3>
					</p>
					<p>{ticket.description}</p>
					<p>Status: {ticket.status}</p>
					<p>ID: {ticket.id}</p>
					<button type="button" onClick={() => handleEditTicket(index)}>
						Edit
					</button>
					<button type="button" onClick={() => handleDeleteTicket(index)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default UserTickets;
