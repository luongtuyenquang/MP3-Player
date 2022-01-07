import Routes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import './scss/index.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes />
            </div>
        </Router>
    );
}

export default App;
