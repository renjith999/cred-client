import React from 'react';
import {connect} from 'react-redux';
import history from '../../History';
import {fetchEmployee,deleteEmployee } from '../../actions';

class StreamDelete extends React.Component {
	componentDidMount()
	{
		this.props.deleteEmployee(this.props.match.params.id);
	}
	
	render(){
		return (
			 		<div>Deleting</div>
			 	);
	}
}
const mapStateToProps = (state,ownProps) =>{
	console.log("deleting");
	return {employee:state.employees.employees};
}

export default connect(mapStateToProps,{fetchEmployee,deleteEmployee})(StreamDelete);