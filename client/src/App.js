import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Menu from "./components/Pages/Menu/menu";
import Special from "./components/Pages/Special/special";
import Reviews from "./components/Pages/Reviews/reviewCard";
import AddReview from "./components/Pages/Reviews/reviewForm"

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/menu" exact element={<Menu />} />
			<Route path="/special-today" exact element={<Special />} />
			<Route path="/reviews" exact element={<Reviews />} />
			<Route path="/add-review" exact element={<AddReview />} />

			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
