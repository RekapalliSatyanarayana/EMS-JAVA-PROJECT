import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';

function CreateEmployeeComponent() 
{
    let navigate=useNavigate();
    const [employee,setEmployee]=useState({
        firstName:"",
        lastName:"",
        email:""
    })
    const handleCancel=(e)=>
    {
        e.preventDefault();
        navigate("/employees");
    }

    const handleChange=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setEmployee({... employee,[name]:value});
    }

    const saveHandle=(e)=>
    {
        e.preventDefault();
        console.log(JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res=>{
            navigate("/employees");
        })
    }

  return (
    <div className='container mt-4'>

        <div className='card col-md-6 offset-3'>
            <h4 className='text-center pt-3'>Add Employee</h4>
        
        <div className='card-body'>
            <form>
                <label className='my-3'>FirstName:</label>
                <input type='text' name="firstName" id='firstName' className='form-control' value={employee.firstName} onChange={handleChange}></input>

                <label className='my-3'>LastName:</label>
                <input type='text' name="lastName" id='lastName' className='form-control' value={employee.lastName} onChange={handleChange}></input>

                <label className='my-3'>Email:</label>
                <input type='text' name="email" id='email' className='form-control' value={employee.email} onChange={handleChange}></input>

                <button className='btn btn-danger mt-3 ' onClick={handleCancel}>Cancel</button>
                <button className='btn btn-primary mt-3 mx-4' onClick={saveHandle}>Save</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default CreateEmployeeComponent
