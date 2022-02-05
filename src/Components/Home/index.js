import React,{useState} from 'react'

const Login = () => {
const [ name , setName ] = useState();
const [ email , setEmail ] = useState();
const [ age , setAge ] = useState();
const [ pwd , setPwd ] = useState();
const [confPassword , setConfPassword] = useState('');
const handleChange =(e)=>{
    setName(e.target.value);
  }
const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }
const handleAgeChange =(e)=>{
    setAge(e.target.value);
  }
  const handlePwdChange =(e)=>{
    setAge(e.target.value);
  }
  const handleConfChange =(e)=>{
    setAge(e.target.value);
  }



    return(
        <>
        <form>
        <label>NAME</label>
        <input type="text" 
         value={name} 
         onChange={(e) => {handleChange(e)}} /><br/>
         <lable>Age</lable>
         <input type="text" value={age} onChange={(e) => {handleAgeChange(e)}} /><br/>
         <lable>Email</lable>
         <input type="email" value={email} onChange={(e) => {handleEmailChange(e)}} /><br/>
         <lable>Pwd</lable>
         <input type="password" value={pwd} onChange={(e) => {handlePwdChange(e)}} /><br/>
         <lable>confirm pwd</lable>
         <input type="password" value={pwd} onChange={(e) => {handlePwdChange(e)}} /><br/>
         <input type="submit" value="Submit"/>
        </form>
        </>
    )
}
export default Login;