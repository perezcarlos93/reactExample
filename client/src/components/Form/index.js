import React, { useEffect, useState, useRef } from "react";
import useLog from "../../Hooks";

import Message from "../Message";

const Form = () => {
	const [text, setText] = useState();
	const [saved, setSaved] = useState();
	const input = useRef();

	function save() {
		setSaved(input.current.value);
	}

	function updateText(e) {
		setText(e.target.value);
	}

	return (
		<div className="container">
			<input ref={input} value={text} onChange={updateText}></input>
			<div>Message: {text}</div>
			<br></br>
			<br></br>
			<button className="btn" onClick={save}>
				Save
			</button>
			<br></br>
			<br></br>
			<Message message={saved} />
		</div>
	);
};

export default Form;
