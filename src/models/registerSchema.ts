import * as yup from 'yup';
const registerSchema=yup.object().shape({
    email:yup.string().email().required().trim(),
    username:yup.string().required().min(4).max(20),
    password:yup.string().min(8).required(),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'password must be same').required(),
    firstName:yup.string().required().max(20),
    lastName:yup.string().required().max(20),
    phoneNumber:yup.string().required().max(20),
})
export default registerSchema;