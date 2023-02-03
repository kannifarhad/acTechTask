import { ButtonProps, Button as MuiButton} from "@mui/material"

export const Button = ({ className, ...rest}:ButtonProps)=>{
    return(
      <MuiButton 
        {...rest}
        className={`customBtn ${className}`}
      />
    )
}