import React, { useState, useEffect } from "react";

const UserTickets = () => {
	const [isOpen, setIsOpen] = useState(false);
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

	const handleToggleOpen = () => {

		setIsOpen(!isOpen)
	}

	return (
		<div className="bg-slate-800 flex flex-col p-6 rounded-md border-4 border-double border-amber-500">
			<h1 className="text-white text-3xl font-bold mb-4">Ticket Tracker</h1>
			<div>
				<button onClick={handleToggleOpen} className="bg-amber-500 font-semibold text-pink-800 text-center rounded-sm w-full border-2 border-solid border-amber-800"> Submit a Ticket </button>
				
				{isOpen && (
				<form
					className=" bg-opacity-40 bg-sky-900 rounded-b-lg amber-500  p-4"
					onSubmit={handleFormSubmit}
				>
					<label htmlFor="title"             className="block text-amber-500 text-sm font-middle mb-2"
>
						Title:
					</label>
					<input
						type="text"
						name="title"
						value={newTicket.title}
						onChange={handleInputChange}
						className="block w-full p-2 rounded-lg"
					/>
					<br />
					<label
						htmlFor="description"
						className="block text-amber-500 text-sm font-middle mb-2"

					>
						Description:
					</label>
					<textarea
						name="description"
						value={newTicket.description}
						onChange={handleInputChange}
						className="block w-full p-2 rounded-lg"
					/>
					<br />
					<label htmlFor="status"             className="block text-amber-500 text-sm font-middle mb-2"
>
						Status:
					</label>
					<select
						name="status"
						value={newTicket.status}
						onChange={handleInputChange}
						className="block w-full p-2 rounded-lg"
					>
						<option value="open">Open</option>
						<option value="in-progress">In Progress</option>
						<option value="closed">Closed</option>
					</select>
					<br />
					<label htmlFor="priority"             className="block text-amber-500 text-sm font-middle mb-2"
>
						Priority:
					</label>
					<select
						name="priority"
						value={newTicket.priority}
						onChange={handleInputChange}
						className="block w-full p-2 rounded-lg"
					>
						<option value="emergency" className="text-red-600">
							Emergency
						</option>
						<option value="top-priority" className="text-amber-500">
							Top Priority
						</option>
						<option value="request" className="amber-500  text-slate-600">
							Request
						</option>
					</select>
					<br />
					<button
						type="submit"
						className="bg-amber-500 rounded-lg p-2 text-pink-800 font-bold"
					>
						Submit
					</button>
				</form>
				)}
			</div>
			<hr className="bg-pink-800 my-4 w-full" />

			<h2 className="text-white font-bold text-2xl mb-4"> Open Tickets:</h2>
			{tickets.map((ticket, index) => (
				<div key={index} className="bg-white rounded shadow-lg shadow-sky-800 p-4 mb-4 ">
					<p>
						<h3 className="text-xl font-semibold text-slate-800">{ticket.title}</h3>
					</p>
					<p className="list-disc pl-4 font-light  text-sky-900 leading-loose">{ticket.description}</p>
					<p className="list-disc pl-4 font-light  text-sky-900 leading-loose">Status: {ticket.status}</p>
					<p className="list-disc pl-4 font-light  text-sky-900 leading-loose">ID: {ticket.id}</p>
					<button
						type="button"
						onClick={() => handleEditTicket(index)}
						className="bg-amber-500 rounded-lg p-2 text-white font-bold mr-2"
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
