import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent() {

    const { add } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        name : '',
        email: '',
        mobile : ''
    });
    const {name, email, mobile} = data;
    const onChange = e => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const getTitle = () => {
        if(add === 'add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    const saveOrUpdateEmployee = e => {
        e.preventDefault();
        let employee = {name: name, email: email, mobile: mobile};
        console.log('employee => ' + JSON.stringify(employee));

        if ( add === "add") {
            EmployeeService.createEmployee(employee).then(response => {
                navigate("/")
            })
        } else {
            EmployeeService.updateEmployee(add, employee).then(response => {
                navigate("/")
            })
        }
    }

    return (
        <div>
            <br></br>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3"><br></br>
                        {getTitle()} <br></br>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Name: </label>
                                    <input placeholder="Enter Name" name="name" className="form-control" 
                                        value={name} onChange={onChange}/><br />
                                </div>
                                <div className = "form-group">
                                    <label> Email : </label>
                                    <input placeholder="Enter Email" name="email" className="form-control" 
                                        value={email} onChange={onChange}/><br />
                                </div>
                                <div className = "form-group">
                                    <label> Mobile : </label>
                                    <input placeholder="Enter Mobile" name="mobile" className="form-control" 
                                        value={mobile} onChange={onChange}/>
                                </div> <br /><br />
                                <button className="btn btn-success empadd" onClick={saveOrUpdateEmployee}>Save</button>
                                {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateEmployeeComponent
