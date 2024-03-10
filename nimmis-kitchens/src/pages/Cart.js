import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cartSlice";

function Cart() {
	const cartItems = useSelector((store) => store.carts.items);
	const dispatch = useDispatch();

	return (
		<div>
			<h1 className="text-center text-2xl mt-1 font-bold mb-10">
				Cart Items
			</h1>
			{!cartItems.length && (
				<p className="text-lg text-center text-red-600 ">Cart Empty</p>
			)}
			{cartItems.map((item) => (
				<CartItem key={item.info.id + "_cart"} item={item.info} />
			))}
			{cartItems?.length ? (
				<button
					onClick={(e) => {
						e.preventDefault();
						dispatch(clearCart());
					}}
					className="p-2 mt-10 mb-20 bg-yellow-400 rounded block mx-auto text-black"
				>
					Clear Cart
				</button>
			) : (
				""
			)}
		</div>
	);
}

export default Cart;
