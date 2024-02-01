const RestroCard = ({
	resName = "Nirmala Kitchen",
	cuisine = "South Indian, Andhra Special",
	rating = 5,
	price = "₹200/- per person",
	deliveryTime = "40 mins",
}) => {
	return (
		<div className="restroCard">
			<div>
				<img
					className="restroCardImg"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcJzVTWJNvW4cDhETXlNhs6r0iNPRNIrpLg&usqp=CAU"
					alt="Restuarants"
				/>
			</div>
			<div>
				<h2>{resName}</h2>
				<p>{cuisine}</p>
				<p>{rating}⭐ </p>
				<p>{price}</p>
				<p>🚚 {deliveryTime}</p>
			</div>
		</div>
	);
};

export default RestroCard;
