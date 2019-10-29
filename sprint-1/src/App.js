import React from "react";
import Hero from "./components/hero";
import Comments from "./components/comments";
import Header from "./components/header";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Comments />
		</div>
	);
}

export default App;
