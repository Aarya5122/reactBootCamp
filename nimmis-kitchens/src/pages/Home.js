import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SWIGGYURL } from "../constants";

import RestroCard from "../components/RestroCard";
import Search from "../components/Search";
import RestroCardShimmer from "../components/RestroCardShimmer";
import PromotedRestroCard from "../components/PromotedRestroCard";
import UserContext from "../context/userContext";

const Home = () => {
	const { setUser, user } = useContext(UserContext);
	const [restaurants, setRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
	let [isFiltered, setIsFiltered] = useState(false);

	const PromotedRestraurantCard = PromotedRestroCard(RestroCard);

	async function fetchSwiggyData() {
		const { data } = await axios.get(SWIGGYURL);
		setRestaurants(
			data?.data?.cards?.find(
				(card) => card?.card?.card?.id === "restaurant_grid_listing"
			)?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredRestaurants(
			data?.data?.cards?.find(
				(card) => card?.card?.card?.id === "restaurant_grid_listing"
			)?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	}

	function filterTopRatedRestaurants(e) {
		e.preventDefault();
		if (!isFiltered) {
			setFilteredRestaurants(
				restaurants?.filter((res) => res.info.avgRating >= 4)
			);
			setIsFiltered(true);
		} else {
			setIsFiltered(false);
			setFilteredRestaurants(restaurants);
		}
	}

	useEffect(() => {
		fetchSwiggyData();
	}, []);

	return (
		<div>
			<Search
				setFilteredRestaurants={setFilteredRestaurants}
				restaurants={restaurants}
			/>
			{console.log("TESTING: ", user)}
			<p>{user.name}</p>
			<input
				type="text"
				className="bg-white px-1 text-black"
				placeholder="Username context"
				value={user.name}
				onChange={(e) => {
					e.preventDefault(); 
					setUser({name: e.target.value});
				}}
			/>
			<br />
			<button onClick={filterTopRatedRestaurants}>
				{isFiltered ? "Cancel" : "Top Rated Restuarant"}
			</button>
			<div className="restroContainer flex mx-auto">
				{filteredRestaurants?.length ? (
					filteredRestaurants.map((res) =>
						res.info.avgRating >= 4.5 ? (
							<div key={res.info.id}>
								<PromotedRestraurantCard
									resId={res.info.id}
									resName={res.info.name}
									cuisine={res.info.cuisines.join(", ")}
									rating={res.info.avgRating}
									price={res.info.costForTwo}
									resImgID={res.info.cloudinaryImageId}
									deliveryTime={`${res.info.sla.deliveryTime} mins`}
								/>
							</div>
						) : (
							<div key={res.info.id}>
								<RestroCard
									resId={res.info.id}
									resName={res.info.name}
									cuisine={res.info.cuisines.join(", ")}
									rating={res.info.avgRating}
									price={res.info.costForTwo}
									resImgID={res.info.cloudinaryImageId}
									deliveryTime={`${res.info.sla.deliveryTime} mins`}
								/>
							</div>
						)
					)
				) : (
					<RestroCardShimmer />
				)}
				<div className="empty-item"></div>
			</div>
		</div>
	);
};

export default Home;
