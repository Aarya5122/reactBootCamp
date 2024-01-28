const Header = () => {
	return (
		<header className="flex alignItemsCenter spaceBetween">
			<div className="logoContainer">
				<img
					className="logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQp5KrJv-iYMPuxeMFGtdjZKobv20IUFu1fg&usqp=CAU"
					alt="logo"
				/>
			</div>
			<div className="navItemsContainer">
				<ul className="flex gap-15 navItems">
					<li>About us</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
