import { UseFormRegister } from './../../../node_modules/react-hook-form/dist/types/form.d';
import { ReactNode } from 'react';

interface IInput {
     label?: string;
     error?: string;
     icon?: ReactNode;
     type: string;
     placeholder?: string;
     name:string
     register:UseFormRegister<any>
     
}
export default IInput;
