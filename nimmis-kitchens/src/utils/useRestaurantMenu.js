import { useEffect, useState } from "react";
import axios from "axios";
import constants from "../constants";

function useRestaurantMenu(restaurantId) {
	const [restaurantInfo, setRestaurantInfo] = useState({});

	async function fetchRestaurantInfo() {
		const { data } = await axios.get(
			constants.RESTAURATMENU?.replace("{RES_ID}", restaurantId)
		);

		setRestaurantInfo(
			data?.data?.cards
				?.find(
					(card) =>
						card?.groupedCard &&
						Object.keys(card?.groupedCard)?.length > 0
				)
				?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
					(card) =>
						card?.card?.card?.["@type"] ===
						"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
				)
		);
	}

	useEffect(() => {
		fetchRestaurantInfo();
	}, []);
	return restaurantInfo;
}

export default useRestaurantMenu;
