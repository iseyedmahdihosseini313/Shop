import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import loginSchema from '../../../models/loginSchema';
import Input from '../../Input/input';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import str from '../../../helper/localization';
const FormLogin = () => {
     const {DontHaveAnAccount,password,enterPassword,email,enterEmail,signin,forgotPassword}=str
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({
          resolver: yupResolver(loginSchema),
     });
     return (
          <form
               onSubmit={handleSubmit((data) => {
                    console.log(data);
               })}
               className=" min-w-full  max-sm:min-h-full  max-md:min-h-[80%] md:min-h-[50%] flex flex-col mx-14  gap-5 justify-center content-center justify-items-center items-center bg-white/5 backdrop-blur-xl outline-none rounded-lg ring-1 ring-cyan-900 py-10 px-4 shadow-sm shadow-neutral-100  "
          >
               <Input
                    error={errors.email?.message}
                    register={register}
                    name="email"
                    type="text"
                    label={email}
                    placeholder={enterEmail}
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
                    error={errors.password?.message}
                    register={register}
                    name="password"
                    type="password"
                    label={password}
                    placeholder={enterPassword}
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
               <div className=" flex flex-col text-center">
                    <div className="text-sm self-start">
                         <span className="text-gray-500">
                             {DontHaveAnAccount}{' '}
                         </span>
                    </div>

                    <div className="text-sm flex space-x-3 divide-x-2 divide-slate-300/55 ">
                         <Link
                              to="/forgotPassword"
                              className="text-blue-600 hover:text-blue-800 font-extralight"
                         >
                              {forgotPassword}
                         </Link>
                         <Link
                              to="/register"
                              className="text-blue-400 hover:text-blue-800 pl-2 "
                         >
                             {signin}
                         </Link>
                    </div>
               </div>

               <Button
                    value="SignIn"
                    className="bg-gradient-to-r from-blue-500/50 to-95%  backdrop:bg-white/5 backdrop-blur-sm font-thin  text-md tracking-widest hover:tracking-wide  text-blue-200 ring-1 ring-blue-600 ring-offset-1 ring-offset-neutral-700  rounded w-20 h-9"
                    type="submit"
               />
          </form>
     );
};

export default FormLogin;
