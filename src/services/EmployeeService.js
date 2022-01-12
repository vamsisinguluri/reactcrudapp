import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://127.0.0.1:8000/employee/api";


class EmployeeService {


    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + "/create" , employee);
    }


    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+ "/" + employeeId + '/delete')
    }

}

export default new EmployeeService()