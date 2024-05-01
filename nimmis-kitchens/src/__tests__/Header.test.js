import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import { BrowserRouter } from "react-router-dom";

describe("should load header component", () => {
	it("should load login button", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		// const loginButton = screen.getByText(/login/); using regex.
		// const loginButton = screen.getByText("login");
		const loginButton = screen.getByRole("button", {
			text: "login",
		});

		expect(loginButton).toBeInTheDocument();
	});

	it("should change the login button to logout on click of login button", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);

		const loginButton = screen.getByRole("button", {
			text: "login",
		});

		fireEvent.click(loginButton);

		const logoutButton = screen.getByRole("button", {
			test: "logout",
		});

		//console.log(logoutButton);

		expect(logoutButton).toBeInTheDocument();
	});
});
