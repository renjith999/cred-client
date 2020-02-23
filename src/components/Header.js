import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class Header extends React.Component {
	renderContent(){
		switch(this.props.auth)
		{
			case null :
				return "still waiting";
			case false :
				return <li><a href="/auth/google">Login With Google</a></li>;
			default :
				 return <li key="3"><a href="/api/logout">Logout</a></li>;
		}
	}
	render(){
		return (
			 <nav>
			    <div className="nav-wrapper">
			      <a href="/" className="brand-logo">Welcome</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        {this.renderContent()}
			      </ul>
			    </div>
			  </nav>
			);
	}
}

const matchStateToProps = (state) => {
	return { auth : state.auth };
}
export default connect(matchStateToProps,{})(Header);