import React from 'react';
import CredForm from './CredForm';
import {createEmployee} from '../../actions';
import {connect} from 'react-redux';

class FormCreate extends React.Component{
	
	
	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.createEmployee(formValues);
	}
	render() {
		return (
				<div>
					<h3>Create Stream</h3>
					<CredForm onSubmit={this.onSubmit}/>
				</div>
			);
	}
}


export default connect(null,{createEmployee})(FormCreate);