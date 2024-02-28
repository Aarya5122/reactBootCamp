import { useEffect, useState } from "react";
import axios from "axios";
import constants from "../constants";

function useRestaurantMenu(restaurantId) {
	const [restaurantInfo, setRestaurantInfo] = useState({});

	async function fetchRestaurantInfo() {
		const { data } = await axios.get(
			constants.RESTAURATMENU?.replace("{RES_ID}", restaurantId)
		);

		console.log(data);

		setRestaurantInfo(
			data?.data?.cards
				?.find(
					(card) =>
						card?.groupedCard &&
						Object.keys(card?.groupedCard)?.length > 0
				)
				?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
					(card) => card?.card?.card?.title === "Recommended"
				)?.card?.card
		);
	}

	useEffect(() => {
		fetchRestaurantInfo();
	}, []);
	return restaurantInfo;
}

export default useRestaurantMenu;
