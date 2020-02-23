import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
// import { BrowserRouter ,Route  } from 'react-router-dom';
import { Router,Route ,Link,Switch } from 'react-router-dom';


import Header from './Header';
import Dashboard from './Dashboard';
import FormCreate from './form/FormCreate';
import FormEdit from './form/FormEdit';
import FormDelete from './form/FormDelete';
import history from '../History';

import {fetchUser} from '../actions';


class App extends React.Component {
	componentDidMount(){
		this.props.fetchUser();
	}
	render(){
		return (
				<div className="container">
					<Router history={history}>
						<div>
							<Header/>
							<Switch>
								<Route path="/cred/" exact component={Dashboard} />
								<Route path="/" exact component={Dashboard} />
								<Route path="/cred/new" exact component={FormCreate} />
								<Route path="/cred/edit/:id" exact component={FormEdit} />
								<Route path="/cred/delete/:id" exact component={FormDelete} />
							</Switch>
						</div>
					</Router>
				</div>
			);
	}
}

export default connect(null,{fetchUser})(App);