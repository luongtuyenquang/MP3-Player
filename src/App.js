import NavMenu from "./components/NavMenu/NavMenu";
import Routes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import './scss/index.scss';

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
