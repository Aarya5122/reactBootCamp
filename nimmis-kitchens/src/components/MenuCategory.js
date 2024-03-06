import { useState } from "react";
import constants from "../constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
function MenuCateory({ menu }) {
	const [showList, setShowList] = useState(false);

	function toggleAccordion(e) {
		e.preventDefault();
		setShowList(!showList);
	}

	const dispatch = useDispatch();

	function handleAddItem(e, res) {
		e.preventDefault();
		dispatch(addItem(res));
	}

	return (
		<div className="border border-2 w-11/12 mx-auto my-2 p-8">
			<p className="bold text-3xl mb-4 flex justify-between">
				<span>
					{menu?.title} ({menu?.itemCards?.length})
				</span>
				{showList ? (
					<span onClick={toggleAccordion}>❌</span>
				) : (
					<span onClick={toggleAccordion}>🔽</span>
				)}
			</p>

			{showList ? (
				<div className="flex">
					{menu?.itemCards?.map((res, index) => (
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
								{res?.card?.info?.description?.split(".")[0]
									?.length < 80
									? res?.card?.info?.description?.split(
											"."
									  )[0]
									: res?.card?.info?.description
											?.split(".")[0]
											?.slice(0, 80) + "..."}
							</p>
							<button
								className="bg-green-400 text-black p-1 my-2 rounded"
								onClick={(e) => handleAddItem(e, res.card)}
							>
								Add +
							</button>
						</div>
					))}
				</div>
			) : (
				""
			)}
		</div>
	);
}
export default MenuCateory;
