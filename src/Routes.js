import { Route, Switch } from 'react-router-dom';
import ListPage from './containers/ListPage';
import DetailPage from './containers/DetailPage';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <ListPage />
            </Route>
            <Route path='/:contractAddress/:tokenId'>
                <DetailPage />
            </Route>
        </Switch>
    )
}
