import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const h1Element = React.createElement(
	"h1",
	{ key: "heading" },
	"Om Namo Venkateshaya!"
);
const paraElement = React.createElement("p", { key: "para" }, "Hello World");

const divElement = React.createElement("div", { className: "root" }, [
	h1Element,
	paraElement,
]);

console.log("para element object: ", paraElement);
console.log("div element object: ", divElement);

root.render(divElement);
