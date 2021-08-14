import React, { useEffect, useState } from "react";
import API from "../../../API";
import "./style.css";

const Get = () => {
	const [notes, setNotes] = useState([]);
	// const notes = useRef();

	const getNotes = async () => {
		// Asynchronously get Data from DB
		const response = await API.getTests({});
		// Isolate the data object in our response
		const data = response.data;
		// Set the Notes state to the data from our DB
		setNotes(data);
	};

	const removeNote = (_id) => {
		API.deleteNote(_id)
			.then((response) => console.log(response))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getNotes();
	}, [notes]);

	return (
		<div>
			<div>
				{notes.map((note) => {
					return (
						<div key={note._id} className="z-depth-5 note row">
							<div className="col s10">
								<h2> {note.message} </h2>
								<br></br>
								<div> {note._id} </div>
							</div>
							<div className="col s2">
								<button
									onClick={() => removeNote(note._id)}
									className="btn red white-text">
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Get;
