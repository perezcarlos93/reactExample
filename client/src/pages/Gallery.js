import React, { useEffect } from "react";
import Card from "..//components/Card";
import Carousel from "../components/Carousel";

import M from "materialize-css";

function Gallery() {
	useEffect(() => {
		M.Carousel.init({
			fullWidth: true,
		});
	});

	const images = [
		"https://www.london.gov.uk/sites/default/files/business-t-square-5649-1x1.jpg?v=190150",
		"https://lifewayresearch.com/wp-content/uploads/2021/07/matteo-jorjoson-WsM82a57Nk-unsplash-600x600.jpg",
		"https://s26597.pcdn.co/wp-content/uploads/2020/10/shutterstock_106106291-600x600-cropped.jpg",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwjuq7Wy3G6-hm3EExarozGhdXABFQZVh6A&usqp=CAU",
		"https://www.cate.org/wp-content/uploads/2016/07/5-600x600.jpg",
		"https://worldathome.brighthorizons.com/assets/images/thumbnails/_intro/PM-160812-5956_8030-600x600.jpg",
	];

	return (
		<div>
			<Carousel />
			<div className="row">
				{images.map((image) => {
					return <Card src={image} />;
				})}
			</div>
		</div>
	);
}

export default Gallery;
