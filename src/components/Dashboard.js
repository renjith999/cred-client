import React from 'react';
import ReactDOM from 'react-dom';
import { Link  } from 'react-router-dom';
import {fetchEmployees} from '../actions';
import {connect} from 'react-redux';


class Dashboard extends React.Component {
	componentDidMount(){
		console.log("fetchEmployees");
		this.props.fetchEmployees();
	}
	renderList()
	{
		if(!this.props.employees)
		{
			return (<tr><td>Please Login</td>
			          </tr>);
		}
		console.log("props",this.props.employees);
		return this.props.employees.map((employee)=>{
					return (
						<tr key={employee._id}>
				            <td>{employee.name}</td>
				            <td>{employee.mobile}</td>
				            <td>{employee.place}</td>
				            <td><Link to={`/cred/edit/${employee._id}`}>Edit</Link><br/><Link to={`/cred/delete/${employee._id}`}>Delete</Link></td>
				        </tr>
						);
				});
	}
	render(){
		console.log("Dashboard");
		console.log(this.props);
		return (
			 <div>
			 	<table>
			        <thead>
			          <tr>
			              <th>Name</th>
			              <th>Mobile</th>
			              <th>Place</th>
			              <th>Actions</th>
			          </tr>
			        </thead>

			        <tbody>
			          {this.renderList()}
			        </tbody>
			      </table>

		      <div>
					<Link to="/cred/new" className="waves-effect waves-light btn">
						Add New
					</Link>
				</div>
			 </div>
			);
	}
}
const matchStateToProps = (state) =>{
	console.log(state.employees);
	return {employees:state.employees.employees};
}

export default connect(matchStateToProps,{fetchEmployees})(Dashboard);