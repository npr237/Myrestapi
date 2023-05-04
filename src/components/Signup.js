
import {useState} from 'react';
import React from 'react'
import {NavLink} from 'react-router-dom';


const SignUp = () => {
  
  const[user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });

  let name,value;
  const handelInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }
  const PostData = async (e)=>{
     e.preventDefault();
     const { name,email,phone,work,password,cpassword   } =user;
     const res=await fetch("/register",{
      method:"POST",
      headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
         
        name,email,phone,work,password,cpassword 
      
      })
})
 
 const data =await res.json();

if(res.status=== 422 || !data){
  window.alert("INVALID REGISTRATION");
  console.log('INVALID REGISTRATION');
}else{
  window.alert(" REGISTRATION SUCCESS");
  console.log('REGISTRATION SUCCESS');

  
}


}


  return (
    <>
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div classNmae='signup-form'>
              <h2 className='form-title'>Sign up</h2>
              <form method='post' className='register-form' id='register-form'>
                <div className='form-group'>
                   <label htmlfor='name'>
                   <i class="zmdi zmdi-account"></i>
                   </label>
                   <input type ='text' name='name' id='name' autoComplete='off' value={user.name} onChange={handelInputs} placeholder='Your Name'/>
                </div>
                <div className='form-group'>
                <label htmlfor='email'>
                   <i class="zmdi zmdi-email"></i>
                   </label>
                   <input type ='email' name='email' id='email' autoComplete='off' value={user.email} onChange={handelInputs}  placeholder='Your Email'/>
                </div>
                <div className='form-group'>
                <label htmlfor='phone'>
                   <i class="zmdi zmdi-phone-in-talk"></i>
                   </label>
                   <input type ='number' name='phone' id='phone' autoComplete='off' value={user.phone} onChange={handelInputs} placeholder='Your PhoneNumber'/>
                </div>
                <div className='form-group'>
                <label htmlfor='work'>
                   <i class="zmdi zmdi-slideshow"></i>
                   </label>
                   <input type ='text' name='work' id='work' autoComplete='off' value={user.work} onChange={handelInputs} placeholder='Your Profession'/>
                </div>

                <div className='form-group'>
                <label htmlfor='password'>
                   <i class="zmdi zmdi-lock"></i>
                   </label>
                  <input type ='password' name='password' id='password' autoComplete='off' value={user.password} onChange={handelInputs} placeholder='Your Password'/>
               </div>

               <div className='form-group'>
               <label htmlfor='cpassword'>
                   <i class="zmdi zmdi-lock"></i>
                   </label>
                  <input type ='password' name='cpassword' id='cpassword' autoComplete='off' value={user.cpassword} onChange={handelInputs} placeholder='Confirm Password'/>
               </div>
               <div className='form-group form-button'>
                <input type='submit' name='signup' id='signup' className='form-submit' value='register' onClick={PostData}/>
               </div>
              </form>
              <div className='signup-image'>
                <figure>
                  
                </figure>
          
               <NavLink to='/login' className='signup-image-link'>I am already registered</NavLink>
        
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
