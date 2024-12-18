import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useGetAllEmployeeQuery, useUpdateEmployeeMutation } from '../services/employeeApi';

const UpdateEmploye = () => {
    const {id} = useParams()
   
    const {data, isLoading} = useGetAllEmployeeQuery()
    let currentUser = data?.find((user)=>user._id === id)
    
    const [updateEmp] = useUpdateEmployeeMutation()
    const navigate = useNavigate()
    

  return (
    <>
         <h1> Update Employeee</h1>
         <Formik
                initialValues={{ firstname:currentUser.firstname, lastname:currentUser.lastname }}
                onSubmit={(values)=>{
                 updateEmp({id, emp:values}).then((res)=>navigate('/')).catch((err)=>console.log(err))
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field type="text" name="firstname" placeholder="firstname" />
                    <br/>
                    <Field type="text" name="lastname" placeholder="lastname" />
                    <br/>
                    <button type="submit">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
      
    </>
  )
}

export default UpdateEmploye