import { useRouteError } from "react-router-dom";

function Error404() {
	const error = useRouteError();
	console.log(error);
	return (
		<>
			<p>{error.status} - Page {error.statusText}, {error?.internal ? "Internal error!": ""}</p>
		</>
	);
}
export default Error404;
