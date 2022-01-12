
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


function ListEmployeeComponent() {

    const navigateto = useNavigate();

    const [empData, setEmpData] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployees().then(response => {
            setEmpData(response.data);
        })
    }, [])

    const deleteEmployee = (id) => {
        console.log("EMP ID: ..." + id )
        EmployeeService.deleteEmployee(id).then(response => {
            setEmpData(empData.filter(employee => employee.id !== id))
        })
    }

    return (
        <div className='listempdata'><br />
            <h2 className="text-center">EMPLOYEE LIST</h2> <br />
            <div className="row">
                <button className='btn btn-success' onClick={ () => navigateto("/addemployee/add")}> ADD EMPLOYEE </button>
            </div>
            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th> Employee Name</th>
                            <th> Email</th>
                            <th> Mobile </th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empData.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.mobile}</td>
                                        <td>
                                            <button className='btn btn-info' onClick={() => navigateto(`/employee/${employee.id}`)}>View</button>&nbsp;&nbsp;
                                            <button className='btn btn-primary' onClick={() => navigateto(`/addemployee/${employee.id}`)}>Update</button>&nbsp;&nbsp;
                                            <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}>Delete</button>    
                                        </td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent
