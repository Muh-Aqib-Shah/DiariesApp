import React from "react"
import "./Diary/styles.css"

type props = {
    type: "login" | "signup"
}
export const LoginForm : React.FC<props> = ({type}) => {
    return(
        <center>
        <div className="login-cont">
            
          <h1>Login</h1>
          <div className="namebox">
          <label >Name</label>
          <input type="text"/>
          </div>
          <br />
          {type === "login" ? <><div className="emailbox">
          <label>Email<br/>
            <input type="email" />
          </label>
          </div>
          <br />
          </> : null}
          <div className="passwordbox">
          <label>Password<br/>
            <input type="password" />
          </label>
          </div>
          {type == "login" ? 
          <div className="signup-link">Dont have a account?<a href="./">Signup here</a></div>
          :
          <div className="signup-link">Already have a account?<a href="./">Login here</a></div> }
          
        </div>
        </center>
    )
}