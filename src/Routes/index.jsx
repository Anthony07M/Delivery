import { Switch, Route } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Register } from "../Pages/Register"

export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/register' component={Register}/>
        </Switch>
    )
}