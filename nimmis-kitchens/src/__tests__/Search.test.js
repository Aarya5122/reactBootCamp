
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
/* import Home from "../pages/Home";
import { render } from "@testing-library/react";
import UserContext from "../context/userContext";


// UserComponent.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserComponent from './UserComponent';
import { UserContext } from './UserContext';

// Mock the UserContext
jest.mock('./UserContext', () => ({
  UserContext: {
    Consumer: ({ children }) =>
      children({ setUser: jest.fn(), user: { name: 'Mock User', age: 25 } }),
  },
}));

test('renders user component correctly', () => {
  const { getByText } = render(<UserComponent />);
  expect(getByText('Set User')).toBeInTheDocument();
  expect(getByText('User: Mock User, 25')).toBeInTheDocument();
});

test('sets user when button is clicked', () => {
  const { getByText } = render(<UserComponent />);
  fireEvent.click(getByText('Set User'));
  expect(setUser).toHaveBeenCalledWith({ name: 'John', age: 30 });
});

describe("Intergration testing on Search Component", () => {
	it("should render home page", () => {
		render(
			<UserContext.Provider>
				<Home />
			</UserContext.Provider>
		);
	});
});
 */
