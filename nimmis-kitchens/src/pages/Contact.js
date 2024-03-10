function Contact() {
	return (
		<div>
			<h1 className="font-bold text-3xl text-center my-4 text-white">
				Contact Us
			</h1>
			<form action="" className="mx-auto block w-3/12">
				<label htmlFor="name" className="block my-2">
					Name:
					<input
						type="text"
						name="name"
						id="name"
						className="bg-white px-2 mx-2 rounded"
						placeholder="Enter your name"
					/>
				</label>
				<label htmlFor="email" className="block my-2">
					Email:
					<input
						type="text"
						name="email"
						id="email"
						className="bg-white px-2 mx-2 rounded"
						placeholder="Enter your email"
					/>
				</label>
				<label htmlFor="query" className="block my-2">
					Description:
					<input
						type="text"
						name="query"
						id="query"
						className="bg-white px-2 mx-2 rounded"
						placeholder="Enter your query"
					/>
				</label>
				<button
					type="submit"
					className="block my-2 bg-green-600 p-2 rounded "
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contact;
