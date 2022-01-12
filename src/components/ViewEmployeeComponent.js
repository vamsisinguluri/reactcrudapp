import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


function ViewEmployeeComponent() {

    const { empno } = useParams();
    const [employeedata, setEmployeeData] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployeeById(empno).then(response => {
            setEmployeeData(response.data);
        })
    }, [])


    return (
        <div>
                <br></br>
                {console.log("employeedata..." + employeedata.name)}
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee Name : </label>
                            <div> { employeedata.name }</div>
                        </div>
                        <div className = "row">
                            <label> Email ID : </label>
                            <div> { employeedata.email }</div>
                        </div>
                        <div className = "row">
                            <label> Mobile No : </label>
                            <div> { employeedata.mobile }</div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default ViewEmployeeComponent
