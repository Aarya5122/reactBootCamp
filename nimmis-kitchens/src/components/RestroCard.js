import constants from "../constants";

const RestroCard = ({
	resName = "Nirmala Kitchen",
	cuisine = "South Indian, Andhra Special",
	rating = 5,
	price = "₹200/- per person",
	deliveryTime = "40 mins",
	resImgID = "",
}) => {
	return (
		<div className="restroCard">
			<div>
				<img
					className="restroCardImg"
					src={
						resImgID
							? `${constants.SWIGGYIMGURL}${resImgID}`
							: constants.DEFAULTRESTUARANTURL
					}
					alt={`${resName} Restuarant`}
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
