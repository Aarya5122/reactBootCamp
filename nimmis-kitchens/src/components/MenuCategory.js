import constants from "../constants";
function MenuCateory({ menu }) {
	return (
		<div className="border border-2 w-11/12 mx-auto p-8">
			<p className="bold text-3xl mb-4">{menu?.title}</p>

			<div className="flex">
				{menu?.itemCards?.map((res) => (
					<div
						key={res?.card?.info?.id}
						className="border border-white w-1/6 p-2 m-4"
					>
						<img
							src={`${constants.MEDIAASSETS}${res?.card?.info?.imageId}`}
							alt=""
						/>
						<p>{res?.card?.info?.name}</p>
						<p className="my-1">
							₹
							{(res?.card?.info?.defaultPrice
								? res?.card?.info?.defaultPrice
								: res?.card?.info?.price) / 100}
							/-
						</p>
						<p
							className="text-xs"
							title={res?.card?.info?.description}
						>
							{res?.card?.info?.description
								?.split(".")[0]
								?.slice(0, 80) + "..."}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
export default MenuCateory;
