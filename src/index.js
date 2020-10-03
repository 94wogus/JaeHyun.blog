import React, {Fragment, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider, useDispatch } from "react-redux";

import * as serviceWorker from './serviceWorker';

import routes from '@/router';
import store from '@/store';

import '@assets/style/common.css';
import '@assets/style/desktop.scss';

import { SPREATSHEET_URL, METHOD, request} from "@api";
import { getPostList } from '@store/action'

const App = () => {
    const dispatch = useDispatch();
    const history = createBrowserHistory();

    useEffect(() => {
        request(METHOD.GET, SPREATSHEET_URL, {}, true)
        .then(result => {
            var index = result.values.shift()
            var packed_post_list = result.values.map((item, n)=>(
                Object.assign({},
                    ...index.map((key, idx)=>({[key]: item[idx]}))
                )
            ))
            dispatch(getPostList(packed_post_list))
        })
        
    }, [dispatch]);

    return (
        <Fragment>
            <Router history={history}>
                <Switch>
                {routes.map((r) => (
                    <Route key={r.path} path={r.path} component={r.component} exact/>
                ))}
                </Switch>
            </Router>
        </Fragment>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
