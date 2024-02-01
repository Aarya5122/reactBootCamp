import { useState, useEffect } from "react";
import axios from "axios";
import { SWIGGYURL } from "../constants";

import RestroCard from "../components/RestroCard";
import Search from "../components/Search";

const Home = () => {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(async () => {
		const data = await axios.get(SWIGGYURL);
		console.log(
			data?.data?.data?.cards?.find(
				(card) => card?.card?.card?.id === "restaurant_grid_listing"
			)?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	}, []);
	return (
		<div>
			<Search />
			<div className="restroContainer flex spaceAround gap-15">
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<div className="empty-item"></div>
			</div>
		</div>
	);
};

export default Home;
