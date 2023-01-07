import React, { useState } from "react";
import axios from "axios";

function Logout() {
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	const handleLogout = async () => {
		setIsLoggingOut(true);
		try {
			await axios.delete("/users/logout", {
				withCredentials: true,
			});
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoggingOut(false);
		}
	};

	return (
		<button onClick={handleLogout}>
			{isLoggingOut ? "Logging out..." : "Logout"}
		</button>
	);
}

export default Logout;
