import constants from "../constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineChecker from "../utils/useOnlineChecker";
import MenuCateory from "../components/MenuCategory";

function Menu() {
	const { resID } = useParams();
	const restaurantInfo = useRestaurantMenu(resID);
	console.log(restaurantInfo);
	console.log(restaurantInfo);
	const status = useOnlineChecker();

	return (
		<div>
			<div>
				<div></div>
				<div>Status: {status ? "Hi" : "NO"}</div>
			</div>
			{restaurantInfo &&
				Array.isArray(restaurantInfo) &&
				restaurantInfo.map((menu) => (
					<MenuCateory
						key={menu.card.card.title}
						menu={menu?.card?.card}
					/>
				))}
		</div>
	);
}

export default Menu;
