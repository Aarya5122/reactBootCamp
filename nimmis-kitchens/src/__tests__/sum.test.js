function sum(a, b) {
	return a + b;
}

test("Sum function should calculate the sum of two numbers", () => {
	const value = sum(5, 1);

	expect(value).toBe(6);
});
