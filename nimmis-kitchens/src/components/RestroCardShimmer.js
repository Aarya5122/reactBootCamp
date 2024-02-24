function RestroCardShimmer() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<>
			{arr.map((item) => (
				<div key={item} className="restroCard"></div>
			))}
		</>
	);
}

export default RestroCardShimmer;
