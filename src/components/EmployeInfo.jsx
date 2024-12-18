import React from 'react'
import { useDeleteEmployeeMutation, useGetAllEmployeeQuery } from '../services/employeeApi'
import { Link } from 'react-router-dom'
 

const EmployeInfo = () => {

   let {data, isLoading } = useGetAllEmployeeQuery()
   let [delEmp] = useDeleteEmployeeMutation()
  
   const deleteEmp = (id)=>{
     console.log(id)
      delEmp(id)
   }


  return (
    <div>
             <h1>  EmployeInfo </h1>
        <Link to="/addemployee" className='btn btn-danger'> Add Employee</Link>
        {
            isLoading && <h1> Loading please wait </h1>
        }
        {
            !isLoading && (
                    data.map((user,i)=>(
                        <div key={i}>
                             {user.firstname}
                             <button className='btn btn-primary' onClick={()=>deleteEmp(user._id)}> Delete</button>
                             <Link to={`/updateemployee/${user._id}`} className='btn btn-secondary'> Edit</Link>
                        </div>    
                    ))
                   
            )
        }
       
    </div>
  )
}

export default EmployeInfo