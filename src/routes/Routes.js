import {Switch, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' >
                <HomePage />
            </Route>

            {/* <Route path='/san-pham/:slug'>
                <Product />
            </Route> */}

            {/* <Route path="*">
                <NotFound />
            </Route> */}
            
        </Switch>
    )
}

export default Routes