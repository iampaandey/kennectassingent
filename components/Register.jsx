

"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Register = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setCpasswprd]=useState("");
     const router=useRouter();

    const handleRegister=async()=>{
     if(password===cpassword){
        const formData={name,password};
        const response=await fetch("./api/auth/register",{
            method:'POST',
            body:JSON.stringify(formData),
        });
        console.log(response);
        if(response.status===200){
         router.push('/profile')
        }
        else{
            alert("Asuvidha Ke Liye Khed !")
        }
     }
     else{
        alert('passowrds not same!')
     }
    }
    return (
        <div className="signin">

            <div className="content">

                <h2 className='login-title'>Register</h2>

                < div class="form">

                    <div class="inputBox">

                        <input type="text" required value={name} onChange={(e)=>{setName(e.target.value)}} /> <i>Username</i>

                    </div>

                    <div class="inputBox">

                        <input type="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <i>Password</i>

                    </div>
                    <div>
                    <input type="cpassword" required value={cpassword} onChange={(e)=>{setCpasswprd(e.target.value)}}/> <i>Confirm Password</i>
                    </div>
                        



                    <div class="inputBox">
                       <button
                      className='buttn-submit'
                      onClick={handleRegister}
                       >Register</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register
