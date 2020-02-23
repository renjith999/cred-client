import _ from 'lodash';

export default (state={},action) => { 
	switch(action.type)
	{
		case 'fetch_employees_data' : return action.payload;
		case 'fetch_employee_data' : return action.payload;
		case 'create_employee' : return action.payload;
		case 'edit_eployee_data' : return action.payload;
		case 'delete_employee_data' : return action.payload;
		default :
			return state;
	}
};