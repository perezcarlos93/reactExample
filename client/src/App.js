import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Gallery from "./pages/Gallery";
import NavBar from "./components/NavBar";
import UserPage from "./pages/UsersPage";

function App() {
	return (
		<div>
			<NavBar />
			<Router>
				<Switch>
					<Route exact path="/" component={UserPage} />
					<Route exact path="/gallery" component={Gallery} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
