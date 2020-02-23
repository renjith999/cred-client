import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import { fetchEmployee,editEmployee } from '../../actions';
import CredForm from './CredForm';

class FormEdit extends React.Component {
	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.editEmployee(this.props.match.params.id,formValues);
	}
	componentDidMount(){
		console.log('fetchEmployee');
		this.props.fetchEmployee(this.props.match.params.id);
	}
	render()
	{
		console.log("edit page");
		if(!this.props.employee)
		{
			return <div>Loading...</div>;	
		}
		console.log(this.props.employee);

		return (
				<div>
					<h3>Edit Data</h3>
					<CredForm initialValues={_.pick(this.props.employee,'name','mobile','place')} onSubmit={this.onSubmit}/>
				</div>
			);
		
	}
}
const mapStateToProps = (state,ownProps) =>{
	console.log("editing");
	console.log(state.employees);
	console.log(state.employees);
	if(!state.employees.employees)
	{
		return {employee:{}};	
	}
	else
	{
		console.log("inside");
		var employee={};
		if(state.employees.employees._id)
			employee=state.employees.employees;
		else
		  _.each(state.employees.employees, (value) => {
		    if (value._id==ownProps.match.params.id) {
		      employee=value;
		    }
		  });
		console.log(employee);
		return {employee:employee};
	}
	
}

export default connect(mapStateToProps,{fetchEmployee,editEmployee})(FormEdit);