import { useEffect, useState } from "react";

function useOnlineChecker() {
	const [onlineStatus, setOnlineStatus] = useState(true);
	function setOnline() {
		console.log("online");
		setOnlineStatus(true);
	}
	function setOffline() {
		console.log("offline");
		setOnlineStatus(false);
	}
	useEffect(() => {
		console.log("mounting");
		window.addEventListener("online", setOnline);
		window.addEventListener("offline", setOffline);
		return () => {
			console.log("Unmounting");
			window.removeEventListener("online", setOnline);
			window.removeEventListener("offline", setOffline);
		};
	}, []);

	return onlineStatus;
}

export default useOnlineChecker;
