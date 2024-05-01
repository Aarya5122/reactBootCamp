import constants from "../constants";
import { useNavigate } from "react-router-dom";

const RestroCard = ({
	resName = "Nirmala Kitchen",
	cuisine = "South Indian, Andhra Special",
	rating = 5,
	price = "₹200/- per person",
	deliveryTime = "40 mins",
	resImgID = "",
	resId,
}) => {
	

	const navigate = useNavigate();

	function openRestro() {
		navigate(`/restaurants/${resId}`);
	}
	return (
		<div className="restroCard" onClick={openRestro}>
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
