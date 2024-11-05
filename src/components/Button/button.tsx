import { memo } from "react";
import IButton from "./buttonType";

const Button = ({className,type,value}:IButton) => {
    return ( <button type={type} className={className}>{value}</button> );
}
 
export default memo(Button);