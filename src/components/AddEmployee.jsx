import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useGetAddemployeeMutation } from '../services/employeeApi';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

  const [addEmpFn] = useGetAddemployeeMutation()
  const navigate = useNavigate()

  return (
    <div>
        <h1> Add Employeee </h1>
        <Formik
       initialValues={{ firstname:'', lastname:'' }}
       onSubmit={(values)=>{
        addEmpFn(values).then((res)=>console.log(res)).catch((err)=>console.log(err))
        navigate('/')
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
    </div>
  )
}

export default AddEmployee