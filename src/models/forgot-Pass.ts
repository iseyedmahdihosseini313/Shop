import * as yup from 'yup';
const forgotSchema=yup.object().shape({
    email:yup.string().email().required().trim(),
  
})
export default forgotSchema;