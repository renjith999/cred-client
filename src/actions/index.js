import employee_data from '../apis/data'; 
import axios from 'axios';
import history from '../History'; 


export const fetchUser = () => async dispatch => {
	const response = await axios.get('/api/current_user');

	dispatch({ type: 'fetch_user' , payload : response.data });
};


export const createEmployee = (formValues) => async (dispatch,getState) => {

	const response = await axios.post('/api/employee',formValues);

	dispatch({ type: 'create_employee' , payload : response.data });
	history.push('/cred');
};


export const fetchEmployees = () => async dispatch => {
	const response = await axios.get('/api/employees');
	console.log('fetchEmployees');
	dispatch({ type: 'fetch_employees_data' , payload : response.data });
	history.push('/cred');
};


export const fetchEmployee = (id) => async dispatch => {
	const response = await axios.get(`/api/employee/${id}`);

	dispatch({ type: 'fetch_employee_data' , payload : response.data });
};

export const editEmployee = (id,formValues) => async dispatch => {
	const response = await axios.patch(`/api/employee/${id}`,formValues);

	dispatch({ type: 'edit_eployee_data' , payload : response.data });
	history.push('/cred');
};

export const deleteEmployee = (id) => async dispatch => {
	const response = await axios.delete(`/api/employee/${id}`);

	dispatch({ type: 'delete_employee_data' , payload : response.data });
	history.push('/cred');
};