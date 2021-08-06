import React from "react";

const User = (props) => {
	console.log("incoming props", props);

	return (
		<div>
			<img src={props.picture.large} alt={props.name.first} />
			<h1>
				{props.name.first} {props.name.last}
			</h1>

			<div>
				<h3>
					{props.location.state}, {props.location.country}
				</h3>

				<h3>Contact Info</h3>
				<ul>
					<li>{props.phone}</li>
					<li>{props.cell}</li>
				</ul>
			</div>
		</div>
	);
};

export default User;
