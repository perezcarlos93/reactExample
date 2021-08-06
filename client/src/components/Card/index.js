import React from "react";
import "./style.css";

const Card = (props) => {
	// if (!props.src) {
	// 	props.src =
	// 		"https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555922701/shape/mentalfloss/istock_000008977856_small.jpg";
	// }

	return (
		<div className="col s3">
			<div className="card">
				<div className="card-image">
					<img src={props.src} alt="passed in prop!" />
					<span className="card-title">Card Title</span>
				</div>

				<div className="card-content">
					<p>
						I am a very simple card. I am good at containing small
						bits of information. I am convenient because I require
						little markup to use effectively.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
