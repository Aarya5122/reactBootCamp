const { render, screen } = require("@testing-library/react");
import RestroCard from "../components/RestroCard";
import PromotedRestroCard from "../components/PromotedRestroCard";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const mockResData = {
	cuisine: "Biryani, Andhra, South Indian, Chinese, Seafood",
	deliveryTime: "26 mins",
	price: "₹500 for two",
	rating: 4.5,
	resId: "120178",
	resImgID: "oycavthjdkphqevhzk7t",
	resName: "Meghana Foods",
};
const PromotedRestraurantCard = PromotedRestroCard(RestroCard);

describe("Testing restro card component", () => {
	it("should render restro card with props: ", () => {
		render(
			<BrowserRouter>
				<RestroCard
					cuisine={mockResData.cuisine}
					deliveryTime={mockResData.deliveryTime}
					price={mockResData.price}
					rating={mockResData.rating}
					resId={mockResData.resId}
					resImgID={mockResData.resImgID}
					resName={mockResData.resName}
				/>
			</BrowserRouter>
		);

		const resName = screen.getByText("Meghana Foods");

		expect(resName).toBeInTheDocument();
	});

	it("should render restro card with promoted label: ", () => {
		render(
			<BrowserRouter>
				<PromotedRestraurantCard RestroCard={mockResData} />
			</BrowserRouter>
		);

		const promotedElement = screen.getByText("Promoted");

		expect(promotedElement).toBeInTheDocument();
	});
});
