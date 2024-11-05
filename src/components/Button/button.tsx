import { memo } from 'react';
import IButton from './buttonType';

const Button = ({ className, type, value,width,height }: IButton) => {
     return (
          <button
               type={type}
               className={`${width ? width : 'w-36 h-10'}${
                    height ? height : ' h-10'
               }   ${className}`}
          >
               {value}
          </button>
     );
};

export default memo(Button);
