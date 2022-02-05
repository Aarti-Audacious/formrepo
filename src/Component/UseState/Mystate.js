import React,{useState} from 'react'

const Mystate = () => {
    const [num,setNum] = useState(0);
    const increment =() =>{
        setNum(num+1)
    }
    return (
        <div>
        increse by{num} 
           <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Mystate;
