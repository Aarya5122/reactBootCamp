import constants from "../constants";
function CartItem({ item }) {
	//console.log(item);
	return (
		<div className="border w-[70%] border-white flex gap-4 p-4 mx-auto m-2">
			<img
				className="block w-2/12"
				src={`${constants.MEDIAASSETS}${item?.imageId}`}
				alt=""
			/>
			<div className="w-8/12">
				<p>{item.name}</p>

				<p className="my-1">
					₹
					{(item?.defaultPrice ? item?.defaultPrice : item?.price) /
						100}
					/-
				</p>
				<p className="text-xs" title={item?.description}>
					{item?.description?.split(".")[0]?.length < 80
						? item?.description?.split(".")[0]
						: item?.description?.split(".")[0]?.slice(0, 200) +
						  "..."}
				</p>
			</div>
		</div>
	);
}

export default CartItem;
