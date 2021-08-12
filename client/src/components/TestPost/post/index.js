import API from "../../../API";
import React, { useRef, useState } from "react";
import "./style.css";

const Post = () => {
	const noteInput = useRef();
	const [alert, setAlert] = useState();

	const clearAlert = () => {
		setTimeout(() => {
			setAlert(null);
		}, 4000);
	};

	const postNew = () => {
		const input = noteInput.current.value;

		if (!input) {
			setAlert(<div className="errorAlert">Please Enter A Note</div>);
			clearAlert();
			return;
		} else {
			setAlert(<div className="successAlert">Note Created</div>);
			clearAlert();

			API.postTest({ message: input })
				.then((data) => {
					console.log(data);
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div>
			<input ref={noteInput} placeholder="Note"></input>
			<div>{alert}</div>
			<button className="btn blue" onClick={postNew}>
				Click To Post
			</button>
		</div>
	);
};

export default Post;
