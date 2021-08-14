import React from 'react';
import { Button } from './button';
import './button.scss';


const menuList = [{ name: "Home" }, { name: "About" }, { name: "View" }, { name: "Add" }, { name: "Insert" }];

type Props ={
    onClick:  (str:string) => void;
}

const ButtonList = (props:Props) =>{
return (
<div className="buttonContainer">
{
menuList.map( x =>
    ( <Button name={x.name} onClick={props.onClick}/>)
)
}    
</div>
)
}

export default ButtonList;