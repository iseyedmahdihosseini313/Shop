import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import registerSchema from '../../../models/registerSchema';
import Input from '../../Input/input';
import Button from '../../Button';
import { Link } from 'react-router-dom';
const FormLayout = () => {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({
          resolver: yupResolver(registerSchema),
     });
     return (
          <form
               onSubmit={handleSubmit((data) => {
                    console.log(data);
               })}
               className="max-sm:min-w-full max-md:min-w-[60%] md:min-w-[25%]  max-sm:min-h-full max-md:min-h-[80%] md:min-h-[50%] flex flex-col m-2 p-2 gap-3 justify-center content-center justify-items-center items-center bg-white/5 backdrop-blur-xl outline-none rounded-lg ring-1 ring-cyan-900 py-10 px-4 shadow-sm shadow-neutral-100 "
          >
               <Input
                    error={errors.firstName?.message}
                    register={register}
                    name="firstName"
                    type="text"
                    label="First Name"
                    placeholder="Fistname"
                    icon={
                         <svg
                              className="w-5 h-5  "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="-2 -2 20 24"
                         >
                              <path
                                   className="stroke-1 stroke-white"
                                   d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                         </svg>
                    }
               />
               <Input
                    error={errors.lastName?.message}
                    register={register}
                    name="lastName"
                    type="text"
                    label="Larst Name"
                    placeholder="Lastname"
                    icon={
                         <svg
                              className="w-5 h-5 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="-2 -2 20 24"
                         >
                              <path
                                   className="stroke-1 stroke-white"
                                   d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                         </svg>
                    }
               />
               <Input
                    error={errors.username?.message}
                    register={register}
                    name="username"
                    type="text"
                    label="Username"
                    placeholder="Username"
                    icon={
                         <svg
                              className="w-7 h-4  "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="-2 -2 20 24"
                         >
                              <path
                                   className="stroke-1 stroke-white"
                                   stroke="currentColor"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                         </svg>
                    }
               />
               <Input
                    error={errors.email?.message}
                    register={register}
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Email"
                    icon={
                         <svg
                              viewBox="-2 -2 20 24"
                              className="w-5 h-4  "
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <g id="style=linear">
                                   <g id="email">
                                        <path
                                             className="stroke-1 stroke-white"
                                             id="vector"
                                             d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                             strokeWidth="1.5"
                                             strokeMiterlimit="10"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                        />
                                        <path
                                             id="vector_2"
                                             d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                                             className="stroke-1 stroke-white"
                                             stroke-linecap="round"
                                        />
                                   </g>
                              </g>
                         </svg>
                    }
               />

               <Input
                    error={errors.phoneNumber?.message}
                    register={register}
                    name="phoneNumber"
                    type="text"
                    label="PhoneNumber"
                    placeholder="PhoneNumber"
                    icon={
                         <svg
                              className="w-5 h-4  "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="-2 0 20 24"
                         >
                              <path
                                   className="stroke-1 stroke-white"
                                   stroke="currentColor"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                              />
                         </svg>
                    }
               />
               <Input
                    placeholder="Password"
                    error={errors.password?.message}
                    register={register}
                    name="password"
                    type="password"
                    label="Password"
                    icon={
                         <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="-2 0 20 24"
                         >
                              <path
                                   className="stroke-1 stroke-white"
                                   stroke="currentColor"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                              />
                         </svg>
                    }
               />
               <Input
                    placeholder="Confirm Password"
                    error={errors.confirmPassword?.message}
                    register={register}
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    icon={
                         <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="-2 0 20 24"
                         >
                              <path
                                   className="stroke-1 stroke-white"
                                   stroke="currentColor"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="2"
                                   d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                              />
                         </svg>
                    }
               />
               <div className=" text-center">
                    <span className="text-gray-500">Have an account? </span>
                    <Link
                         to="/login"
                         className="text-blue-700 hover:text-blue-700 text-sm font-medium "
                    >
                         Login here
                    </Link>
               </div>
               <Button
                    value="Submit"
                    className="mt-2 mx-16 bg-gradient-to-r from-blue-500/50 to-95%  backdrop:bg-white/5 backdrop-blur-sm font-thin text-md tracking-widest hover:tracking-wide  text-blue-200 ring-1 ring-blue-600 ring-offset-1 ring-offset-neutral-700  rounded w-20 h-9"
                    type="submit"
               />
          </form>
     );
};

export default FormLayout;
