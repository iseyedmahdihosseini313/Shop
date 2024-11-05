import { memo } from 'react';
import IButton from './buttonType';

const Button = ({ className, type, value }: IButton) => {
     return (
          <button type={type} className={`w-36 h-10  ${className}`}>
               {value}
          </button>
     );
};

export default memo(Button);
