import { memo, useState } from 'react';
import IInput from './inputTypes';

const Button = ({
     label,
     error,
     icon,
     type,
     placeholder,
     name,
     register,
}: IInput) => {
     const [showPass, setShowPass] = useState(false);
     return (
          <div className="flex flex-col  rounded-md w-full h-[2.92rem] backdrop-blur-sm">
               {label && (
                    <label
                         className="text-gray-400 font-light pl-2 text-xs first-letter:text-lg first-letter:-tracking-widest tracking-tight"
                         htmlFor={label}
                    >
                         {label}
                    </label>
               )}
               <div className="flex rounded-md justify-center gap-2 content-center    ">
                    {icon && (
                         <span className="w-5 h-5  flex justify-center items-center">
                              {icon}
                         </span>
                    )}
                    <input
                         autoComplete="off"
                         {...register(name)}
                         className=" flex-1 hover:outline-none outline-none bg-transparent  caret-cyan-300 placeholder:text-white/10 placeholder:font-thin placeholder:text-md placeholder:tracking-widest placeholder:hover:text-blue-400/55 pl-3 text-slate-200   text-sm font-extralight  "
                         id={label}
                         placeholder={placeholder}
                         type={
                              type === 'password'
                                   ? showPass
                                        ? 'text'
                                        : 'password'
                                   : type
                         }
                    />
                    {type === 'password' && (
                         <span
                              onClick={() => setShowPass(!showPass)}
                              className="w-4 h-4 stroke-gray-600 flex justify-center content-center items-center mr-2"
                         >
                              {showPass ? (
                                   <svg
                                        className="w-5 h-6  stroke-gray-200 hover:stroke-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="-2 -2 24 24"
                                   >
                                        <path d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                   </svg>
                              ) : (
                                   <svg
                                        className="w-5 h-6  stroke-gray-200 hover:stroke-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="-2 -2 24 24"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                   </svg>
                              )}
                         </span>
                    )}
               </div>
               {error && (
                    <span className="text-red-500 ml-2 text-xs first-letter:uppercase first-letter:font-black first-letter:tracking-widest font-normal">
                         {error}
                    </span>
               )}
          </div>
     );
};

export default memo(Button);
