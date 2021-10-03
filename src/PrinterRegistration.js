import React, { useState } from 'react'
import './Register.css'
import db from './firebase'

function PrinterRegistration() {

    const [register, setregister] = useState({
        username:"",
        shopname:"",
        email:"",
        phone:"",
        password:""
      })

      const handleInput = (e) =>{

        const name = e.target.name;
        const value = e.target.value;
        console.log(name , value);

        setregister({...register, [name] : value})

      }

      const handleSubmit = (e) =>{



      }
    return (
        <div className="registration">
            <div className="comp__name">
                <h1>Printkar</h1>
            </div>
           <div className="registration__form">
            <form action="" onsubmit = {handleSubmit}>
                <div className="register__username">
                    <label htmlFor="username">Full Name</label>
                    <input type="text" name="username" className="" value =  {register.username} placeholder = "Your Full Name" onChange={handleInput}  autocomplete="off"/>

                </div>

                <div className="register__username">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="" value =  {register.email} placeholder = "Your Email" onChange={handleInput} autocomplete = "off"/>
                    
                </div>

                <div className="register__username">
                    <label htmlFor="shopname">Shop Name</label>
                    <input type="text" name="shopname" className="" value =  {register.shopname} placeholder = "Your Shop Name" onChange={handleInput} autocomplete = "off"/>
                    
                </div>

                <div className="register__username">
                    <label htmlFor="Phonenumber">Phone Number</label>
                    <input type="text" name="phone" className="" value =  {register.phone} placeholder = "Your Phone Number" onChange={handleInput} autocomplete = "off"/>
                    
                </div>

                <div className="register__username">
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="password" className="" value =  {register.password} placeholder = "Create Password" onChange={handleInput} autocomplete = "off"/>
                    
                </div>
                <button type="submit" className="submit__btn">Submit</button>
            </form>
           </div> 
        </div>
    )
}

export default PrinterRegistration
