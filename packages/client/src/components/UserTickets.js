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
		<div className="bg-blue-800 flex flex-col p-6">
			<h1 className="text-white text-3xl font-bold mb-4">Ticket Tracker</h1>
			<form
				className="bg-blue-600 text-yellow-400 rounded-lg p-4"
				onSubmit={handleFormSubmit}
			>
				<label htmlFor="title" className="block text-white font-bold mb-2">
					Title:
				</label>
				<input
					type="text"
					name="title"
					value={newTicket.title}
					onChange={handleInputChange}
					className="block w-full p-2 rounded-lg text-white bg-blue-700"
				/>
				<br />
				<label
					htmlFor="description"
					className="block text-white font-bold mb-2"
				>
					Description:
				</label>
				<textarea
					name="description"
					value={newTicket.description}
					onChange={handleInputChange}
					className="block w-full p-2 rounded-lg text-white bg-blue-700"
				/>
				<br />
				<label htmlFor="status" className="block text-white font-bold mb-2">
					Status:
				</label>
				<select
					name="status"
					value={newTicket.status}
					onChange={handleInputChange}
					className="block w-full p-2 rounded-lg text-white bg-blue-700"
				>
					<option value="open">Open</option>
					<option value="in-progress">In Progress</option>
					<option value="closed">Closed</option>
				</select>
				<br />
				<label htmlFor="priority" className="block text-white font-bold mb-2">
					Priority:
				</label>
				<select
					name="priority"
					value={newTicket.priority}
					onChange={handleInputChange}
					className="block w-full p-2 rounded-lg text-white bg-blue-700"
				>
					<option value="emergency" className="text-red-600">
						Emergency
					</option>
					<option value="top-priority" className="text-orange-600">
						Top Priority
					</option>
					<option value="request" className="text-yellow-600">
						Request
					</option>
				</select>
				<br />
				<button
					type="submit"
					className="bg-yellow-600 rounded-lg p-2 text-white font-bold"
				>
					Submit
				</button>
			</form>
			<hr className="bg-purple-500 my-4 w-full" />
			<h2 className="text-white font-bold text-2xl mb-4">Tickets:</h2>
			{tickets.map((ticket, index) => (
				<div
					key={index}
					className="bg-blue-600 text-yellow-400 rounded-lg p-4 mb-4"
				>
					<p>
						<h3 className="text-white font-bold">{ticket.title}</h3>
					</p>
					<p className="text-white">{ticket.description}</p>
					<p className="text-white">Status: {ticket.status}</p>
					<p className="text-white">ID: {ticket.id}</p>
					<button
						type="button"
						onClick={() => handleEditTicket(index)}
						className="bg-yellow-600 rounded-lg p-2 text-white font-bold mr-2"
					>
						Edit
					</button>
					<button
						type="button"
						onClick={() => handleDeleteTicket(index)}
						className="bg-red-600 rounded-lg p-2 text-white font-bold"
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default UserTickets;
