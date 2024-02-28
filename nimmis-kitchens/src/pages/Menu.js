import constants from "../constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function Menu() {
	const { resID } = useParams();
	const restaurantInfo = useRestaurantMenu(resID);

	return (
		<div>
			<div>
				<div></div>
				<div></div>
			</div>
			<div>
				<p>Menu</p>
				<p>{restaurantInfo?.title}</p>

				<div>
					{restaurantInfo?.itemCards?.map((res) => (
						<div key={res?.card?.info?.id}>
							<img
								src={`${constants.MEDIAASSETS}${res?.card?.info?.imageId}`}
								width="10%"
								alt=""
							/>
							<p>{res?.card?.info?.name}</p>
							<p>
								₹
								{(res?.card?.info?.defaultPrice
									? res?.card?.info?.defaultPrice
									: res?.card?.info?.price) / 100}
								/-
							</p>
							<p>{res?.card?.info?.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Menu;
