import { useContext, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";
import { useSelector } from "react-redux";

const Header = () => {
	const [btnName, setBtnName] = useState("login");
	const [user, setUser] = useState({});

	const userData = useContext(UserContext);
	console.log(userData);

	// Subscribed to store.cart.items
	const cartItems = useSelector((store) => store.cart.items);

	console.log("Rerendered header");

	return (
		<header className="flex alignItemsCenter spaceBetween">
			<div className="logoContainer">
				<img
					className="logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQp5KrJv-iYMPuxeMFGtdjZKobv20IUFu1fg&usqp=CAU"
					alt="logo"
				/>
			</div>
			<div className="navItemsContainer flex gap-15">
				<ul className="flex gap-15 navItems">
					{user?.name ? <li>{user.name}</li> : ""}
					<li>
						<Link to={"/about"}> About us </Link>
					</li>
					<li>Contact</li>
					<li>Cart ({cartItems.length})</li>
				</ul>
				<button
					onClick={(e) => {
						e.preventDefault();
						if (btnName === "login") {
							setUser({ name: userData.name ?? "Nirmala" });
							setBtnName("logout");
						} else {
							setBtnName("login");
							setUser({});
						}
					}}
				>
					{btnName}
				</button>
			</div>
		</header>
	);
};

export default Header;
