import Routes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import './scss/index.scss';
import { connect } from "react-redux";

function App({themeDark}) {
    return (
        <Router>
            <div className={`App ${themeDark === true ? 'dark-app' : ''}`}>
                <Routes />
            </div>
        </Router>
    );
}

const mapStateToProps = state => {
    return {
        themeDark: state.darkModeReducer,
    }
}

export default connect(mapStateToProps, null)(App)
