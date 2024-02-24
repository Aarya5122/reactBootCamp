import { useState } from "react";

const Search = ({ setFilteredRestaurants, restaurants }) => {
	const [searchValue, setSearchValue] = useState("");

	function searchValueChange(e) {
		e.preventDefault();
		setSearchValue(e.target.value);
	}

	function onSearch(e) {
		e.preventDefault();
        if(searchValue===""){
            setFilteredRestaurants(restaurants)
        }
		setFilteredRestaurants(
			restaurants?.filter((restaurant) =>
				restaurant.info.name
					?.toLowerCase()
					?.includes(searchValue?.toLowerCase())
			)
		);
	}

	return (
		<form action="" onSubmit={onSearch}>
			<input
				type="text"
				placeholder="Search for restuarants, foods"
				value={searchValue}
				onChange={searchValueChange}
			/>
			<input type="button" onClick={onSearch} value="search" />
		</form>
	);
};

export default Search;
