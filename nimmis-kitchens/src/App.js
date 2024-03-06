import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import UserContext from "./context/userContext";
import { useState } from "react";

import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const App = () => {
	const [user, setUser] = useState({ name: "Nagaraj" });
	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ user, setUser }}>
				<Header />

				<Outlet />
			</UserContext.Provider>
		</Provider>
	);
};

export default App;
