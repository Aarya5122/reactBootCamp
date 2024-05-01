// Render component on JS DOM to test if component is renderd.

import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";

describe("Count element group: ", ()=>{
    test("Should load contact us component", () => {
		render(<Contact />);
		const heading = screen.getByRole("heading");
		// console.log(heading);
		expect(heading).toBeInTheDocument();
	});
})

it("Should load contact us component", () => {
	render(<Contact />);
	const heading = screen.getByRole("heading");
	// console.log(heading);
	expect(heading).toBeInTheDocument();
});

test("Should load button component", () => {
	render(<Contact />);
	const button = screen.getByText("Submit");
	// console.log(button);
	expect(button).toBeInTheDocument();
});
