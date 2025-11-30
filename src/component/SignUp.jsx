import React, { useState } from 'react'

const SignUp = () => {
  let[show,setShow]=useState(true);
  // const[user,setUser]=useState("");
  const[user,setUser]=useState({
    firstName:"",
    lastName:"",
    password:"",
    email:"",
    phone:"",
  });
  const[errors,setErrors]=useState({
    firstNameErr:"",
    lastNameErr:"",
    passwordErr:"",
    emailErr:"",
    phoneErr:"",
  })
  function handelSingup(){
    
    if(!user.firstName){
      return setErrors((prev)=>({...prev,firstNameErr:"first name is requird"}));
    }else{
      setErrors((prev)=>({...prev,firstNameErr:""}));
    }
    if(!user.lastName){
      return setErrors((prev)=>({...prev,lastNameErr:"last name is requird"}));
    }else{
      setErrors((prev)=>({...prev,lastNameErr:""}));
    }
    if(!user.password){
      return setErrors((prev)=>({...prev,passwordErr:"password is requird"}));
    }else{
      setErrors((prev)=>({...prev,passwordErr:""}));
    }
    if(!user.email){
      return setErrors((prev)=>({...prev,emailErr:"email is requird"}));
    }else{
      setErrors((prev)=>({...prev,emailErr:""}));
    }
    if(!user.phone){
      return setErrors((prev)=>({...prev,phoneErr:"phone number is requird"}));
    }else{
      setErrors((prev)=>({...prev,phoneErr:""}));
    }
  
    console.log("submit successfully");
    
  }
  
  return (
    <div className="container bg-background md:p-32 w-full">
        <div className='flex flex-col gap-8 justify-center items-center m-auto w-[340px] md:w-[650px] h-full bg-gradient-to-br from-[#0f2027] via-[#19183B] to-[#184D47] py-16 px-10 rounded-xl md:rounded-4xl'>
          <div className="flex flex-col gap-2">
            <input onChange={(e)=>{setUser((prev)=>({...prev,firstName:e.target.value}))}} type="text" className=' bg-white border-2 border-primary px-3 py-2 w-[320px] md:w-[570px] h-14 rounded-2xl text-xl' placeholder="Enter your first name"/>
            <span className='text-xl text-red-500'>{errors.firstNameErr}</span>
          </div>
          <div className="">
            <input onChange={(e)=>{setUser((prev)=>({...prev,lastName:e.target.value}))}} type="text" className=' bg-white border-2 border-primary px-3 py-2 w-[320px] md:w-[570px] h-14 rounded-2xl text-xl' placeholder='Enter your last name'/>
            <span className='text-xl text-red-500'>{errors.lastNameErr}</span>
          </div>
          
          <div className=" flex">
            <div className="">
              <input onChange={(e)=>{setUser((prev)=>({...prev,password:e.target.value}))}} type={show ? "password" : "text"} className=' bg-white border-2 border-primary px-3 py-2 w-[320px] md:w-[570px] h-14 rounded-2xl text-xl' placeholder="Enter password" />
              <span className='text-xl text-red-500'>{errors.passwordErr}</span>
            </div>
              <button
                type="button"
                onClick={() => setShow(prev => !prev)}
                className=""
              >
                
              </button>
          </div>
          <div className="">
            <input type="email" onChange={(e)=>{setUser((prev)=>({...prev,email:e.target.value}))}} className=' bg-white border-2 border-primary px-3 py-2 w-[320px] md:w-[570px] h-14 rounded-2xl text-xl' placeholder='Email adderss'/>

            <span className='text-xl text-red-500'>{errors.emailErr}</span>
          </div>
          <div className="">
            <input type="number" onChange={(e)=>{setUser((prev)=>({...prev,phone:e.target.value}))}} className=' bg-white border-2 border-primary px-3 py-2 w-[320px] md:w-[570px] h-14 rounded-2xl text-xl' placeholder='Phone number'/>
            <span className='text-xl text-red-500'>{errors.phoneErr}</span>
          </div>
          <button onClick={handelSingup} className=' border-2 border-primary px-8 text-white text-2xl font-medium bg-[#5F6769] hover:scale-105 translate-0.5 py-2 rounded-2xl'>Submit</button>
        </div>
    </div>
  )
}

export default SignUp
