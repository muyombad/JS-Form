import { useState } from "react"

import "./main.cs"
function Me() {

const [log, inp] = useState('Sin Up')   
let [data, data2] = useState('Register')
function over() {
  data2("Register")
}
function over2() {
  data2("Login")
}
function forget() {
  data2("Forget Password")
}

  return (
    <>
    <div className="form">
      <div className="hed">
        <h2>{data}</h2>
      </div>
      {data=="Forget Password"?<><label for="email">Email:</label>
         <input type="email" id="email" name="email" required/></>:<></>}
        
        
         {data=="Register"?<><label for="username">Username:</label><input type="text" id="username" name="username" required/>
         <label for="email">Email:</label>
         <input type="email" id="email" name="email" required/>
         <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/></>
         
         :<di></di>}
        
        {data=="Login"?<><label for="username">Username:</label><input type="text" id="username" name="username" required/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        </>:<div></div>}

        
        {data=="Login"?<><li onClick={forget}>Forget Password?<a> Click Here</a></li></>:<di></di>}
        {data== "Forget Password"?<><button className="but"  type="submit">Reset</button></>:<>
        <button className={data=="Register"?"but":"but red"} onClick={over} type="submit">Register</button>
        <button className={data=="Login"?"but":"but red"}onClick={over2} type="submit">Log In</button></>}
    </div>
    </>
  )
}

export default Me