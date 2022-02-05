import React,{useState} from 'react'

export const Myform = () => {
    const [name,setName] = useState('');
    const [fullName,setFullName] = useState('');
    const handleChange = (event) =>{
        //console.log(event.target.value);
        setName(event.target.value);
    }
    const handleClick = (event) =>{
        setFullName(name);
    
    }
    return (
        
            <>  
            <h1>Hello  {fullName}</h1>
                <input type="text" placeholder="Enter your name" onChange={handleChange} value={name}/>
                <button onClick={handleClick} >click me</button>
            </>
        
    )
}
export default Myform;
