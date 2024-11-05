import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from '../../Input/input';
import Button from '../../Button';
import forgotSchema from '../../../models/forgot-Pass';
const ForgotPass = () => {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({
          resolver: yupResolver(forgotSchema),
     });
     return (
          <form
               onSubmit={handleSubmit((data) => {
                    console.log(data);
               })}
               className="max-sm:min-w-full m-20 max-md:min-w-full md:min-w-full  max-sm:min-h-full max-md:min-h-[80%] md:min-h-[50%] flex flex-col  p-2 gap-4 justify-center  items-center bg-white/5 backdrop-blur-xl outline-none rounded-xl ring-1 ring-cyan-900 py-10 px-4 shadow-sm shadow-neutral-100 "
          >
               <Input
                
                    error={errors.email?.message}
                    register={register}
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Enter Your Email"
                   
               
               />
             
            
               <Button
               
                    value="Continue"
                    className="bg-gradient-to-r from-blue-500/50 to-95%  backdrop:bg-white/5 backdrop-blur-sm font-thin  text-md tracking-widest hover:tracking-wide  text-blue-200 ring-1 ring-blue-600 ring-offset-1 ring-offset-neutral-700  rounded w-20 h-9"
                    type="submit"
               />
          </form>
     );
};

export default ForgotPass;
