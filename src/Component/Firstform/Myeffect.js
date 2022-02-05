import React,{useState,useEffect} from 'react'

const Myeffect = () => {
const [num,setNum] = useState(0);
const [num1 ,changeNum1] = useState(0);
useEffect(() => {
    alert('Please click ok');
 
},[]);
const changeNum = () => {
    setNum(num + 1);
}
const changeClick = () => {
    changeNum1(num1 - 1);
}
    return (
        <div>
            <button onClick={changeNum}>click me {num}</button>
            <button onClick={changeClick}>click me {num1}</button>
        </div>
    )
}

export default Myeffect;
