import { useState } from "react";
import Badge from "./components/badge/Badge";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import {
	Routes,
	Route
} from 'react-router-dom'

// 3. Context yang telah dibuat di import ke dalam komponen yang membutuhkan
import { AppContext } from "./context/AppContext";
import Home from "./page/home/Home";
import Gallery from "./page/gallery/Gallery";

function App() {

	const [theme, setTheme] = useState("dark")

	return (
		// 4. Definisikan Provider [namacontext].Provider
		<>
			<AppContext.Provider
				// 5. Definisikan Value atau function yang dibutuhkan untuk children
				value={{
					lang: "id",
					theme: theme,
				}}
			>
				<Navbar />

				<Card lang="en"/>
				<br />
				<Card />
				<br />
				<Card />
				
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
				</Routes>

				<button onClick={() => setTheme(theme === "dark" ? "ligth" : "dark")}>Change Theme</button>
			</AppContext.Provider>

		</>
	);
}

export default App;
