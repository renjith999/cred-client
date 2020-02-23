import React from 'react';
import {Field, reduxForm} from 'redux-form';



class CredForm extends React.Component{
	renderError({error,touched}){
		if(error && touched ){
			return (
					<div className="ui error message">
						<div className="header">{error}</div>
					</div>
				)
		}
	}
	renderInput = ({input,label,meta}) => {
		console.log("input ",input);
		// return <input onChange={formProps.input.onChange} value={formProps.input.value}/>;
				const className=`field ${meta.error && meta.touched ? 'error': ''} `;
		return (
				<div className={className}>
					<label>{label}</label>
					<input {...input} autoComplete="off"/>
					{this.renderError(meta)}
				</div>
				);
	} 
	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.onSubmit(formValues);
	}
	render() {
		return (
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error"> 
					<Field name="name" component={this.renderInput} label="enter name"/>
					<Field name="mobile" component={this.renderInput} label="enter mobile"/>
					<Field name="place" component={this.renderInput} label="enter place"/>
					<button className="ui button primary">Submit</button>
				</form>
			);
	}
}
const validate = formValues => {
	const errors = {};
	if(!formValues.name){
		errors.name="enter a name";
	}
	if(!formValues.mobile){
		errors.mobile="enter a mobile";
	}
	if(!formValues.place){
		errors.place="enter a place";
	}
	return errors;
};

const formWrapped = reduxForm({
	form : "CredForm",
	validate:validate
})(CredForm);
export default formWrapped;