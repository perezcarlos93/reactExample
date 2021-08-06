import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import User from "../components/User";

const UserPage = () => {
	const [results, setResults] = useState();
	// const results = useRef();

	useEffect(() => {
		axios.get("https://randomuser.me/api/?results=10").then(({ data }) => {
			return setResults(data.results);
		});
	}, []);

	// console.log(results);

	return (
		<div>
			{/* {results.map((user) => {
				console.log(user);
				// return <User props={user} />;
			})} */}
		</div>
	);
};

export default UserPage;
