import * as yup from 'yup';
const loginSchema=yup.object().shape({
    email:yup.string().email().required().trim(),
    password:yup.string().min(8).required().trim(),
  
})
export default loginSchema;