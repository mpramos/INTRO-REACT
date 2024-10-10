import react  from "react";

const Header=(props)=>{
    console.log('props',props.text);
    
    return (
        <>
        <h1>{props.text}</h1>
        </>
    )
}

export default Header


