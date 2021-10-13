import { Switch, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Subscription } from '../Pages/Subscription'
import { SubscriptionContinue } from '../Pages/Subscription-continue'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/subscription" component={ Subscription }/>
            <Route exact path="/subscription-continue" component={ SubscriptionContinue }/>

        </Switch>
      );
    
}