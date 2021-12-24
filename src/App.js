import NavMenu from "./components/NavMenu/NavMenu";
import Routes from "./routes/Routes";
import { HashRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <NavMenu />

                <Routes />
            </div>
        </Router>
    );
}

export default App;
