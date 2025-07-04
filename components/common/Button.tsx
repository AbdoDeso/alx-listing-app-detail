import { ButtonProps } from "@/interfaces";
import { Style , buttonBg} from "@/constants"

export default function Button({label ,style , variant}: ButtonProps) {
    return (
     <div className={`${Style[style]} ${buttonBg[variant]}`}>{label}</div>
    );
}
