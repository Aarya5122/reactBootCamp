import { render, screen } from "@testing-library/react";
import Menu from "../pages/Menu";
import { act } from "react-dom/test-utils";
import ResMenuData from "../mockData/resMenu.json";

global.fetch = jest.fn(() =>
	Promise.resolve({ json: () => Promise.resolve(ResMenuData) })
);

describe("Menu and Cart component integration testing", () => {
	it("Cart component testing", async () => {
		await act(async () => {
			console.log(<Menu />);
			render(<Menu />);

			const accordionHeader = screen.getByText("Recommended (20)");
		});
	});
});
