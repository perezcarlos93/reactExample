import React, { useEffect, useState } from "react";
import "./style.css";

const Counter = () => {
	const [count, setCount] = useState({
		current: 0,
		message: "Hello!",
		key1: "one",
		key2: "two",
		key3: "three",
	});

	useEffect(() => {
		console.log("re rendered");
	}, []);

	function add() {
		setCount((prevCount) => {
			return {
				...prevCount,
				current: prevCount.current + 1,
				key2: prevCount.key2 + 1,
			};
		});
	}

	function subtract() {
		setCount((prevCount) => {
			return {
				...prevCount,
				current: prevCount.current - 1,
				key2: prevCount.key2 + 1,
			};
		});
	}

	return (
		<div>
			<button onClick={subtract} className="btn">
				Subtract
			</button>
			<span>{count.current}</span>
			<span>{count.message}</span>
			<span>{count.key1}</span>
			<span>{count.key2}</span>
			<span>{count.key3}</span>
			<button onClick={add} className="btn">
				Add
			</button>
		</div>
	);
};

export default Counter;
