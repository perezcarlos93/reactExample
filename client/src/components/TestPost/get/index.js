import API from "../../../API";
import React, { useEffect, useState } from "react";
import "./style.css";

const Post = () => {
	const [state, setState] = useState([]);

	const getNotes = async () => {
		const response = await API.getTests();
		const data = response.data;
		setState(data);
	};

	useEffect(() => {
		getNotes();
	}, [state]);

	const remove = (_id) => {
		console.log(_id);
		API.deleteTest(_id).then((response) => {
			console.log("delete request", response);
		});
	};

	return (
		<div>
			<div>
				{state.map((message) => {
					return (
						<div key={message._id} className="row z-depth-5 note">
							<div className="col s11" key={message._id}>
								<strong>{message.message}</strong>
								<br></br>
								<br></br>
								<small>{message._id}</small>
							</div>
							<button
								onClick={() => remove(message._id)}
								className="btn red white-text col s1">
								Delete
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Post;
