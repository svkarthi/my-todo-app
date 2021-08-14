import React from 'react';
import { ReactNode } from 'react';
import './button.scss';


type Props = {
name:string;
onClick:  (str:string) => void;
}
export const Button = (props:Props) =>{
return(
    <>
    <button onClick={(e:React.MouseEvent) => props.onClick(props.name)}>{props.name}</button>
    </>
)

}
