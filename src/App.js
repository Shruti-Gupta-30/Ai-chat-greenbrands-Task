import { Routes, Route } from "react-router-dom";
import Chats from "./pages/Chats/Chats.jsx";
import Characters from "./pages/Characters/Characters";
import GenerateImages from "./pages/GenerateImages/GenerateImages.jsx";
import CreateCharacter from "./pages/CreateCharacter/CreateCharacter";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Chats />} />
				<Route path="/chats" element={<Chats />} />
				<Route path="/myCharacters" element={<Characters />} />
				<Route path="/generateImages" element={<GenerateImages />} />
				<Route path="/createCharacter" element={<CreateCharacter />} />
			</Routes>
		</>
	);
}

export default App;
