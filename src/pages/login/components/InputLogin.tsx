import React from "react"

//Passar atributos para componentes
interface IInputLoginProps {
    label: string;
    value: string;
    type?: string;
    onPressEnter?: () => void;
    onChange?: (newValue: string) => void;

}
//receber propiedades do componentes
export const InputLogin: React.FC<IInputLoginProps> = (props) => {
    return(
            <label >
                <span>{props.label}</span>
                
                <input 
                    type={props.type} 
                    value={props.value} 
                    onChange={(e) => props.onChange && props.onChange(e.target.value)}  
                    onKeyDown={e => e.key === "Enter" ? props.onPressEnter && props.onPressEnter() : undefined}
                />
            
            </label>

    )
}