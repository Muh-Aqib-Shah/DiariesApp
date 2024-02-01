import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup';
import "./App.css"

export const Form = () => {
   
const schema = Yup.object().shape({
    username: Yup.string().required("Enter a valid username!").max(16,"maximum characters are 16"),
    password: Yup.string().required("Enter a valid password").min(8,"password must contain atleast 8 characters"),
    email: Yup.string().email("Enter a email like abc@x.yz.com")
    
});


let {handleSubmit,register,setError,formState: {errors,isSubmitting}} =  useForm({
  resolver: yupResolver(schema)
})
const [isLogin,setIsLogin] = useState(true)
const [loading,setLoading] = useState(false)

const submitForm = async (data: any) =>{
    const endpoint = isLogin ? "auth/login" : "auth/signup";
    fetch("fakeapi/auth/login",{
      method: "POST",
        body: data
    }).then(dat => console.log("GETTING HERE",dat))

}

return (
    <div className="auth">
      <div className="card">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="inputWrapper">
            <input {...register("username",{required: true})} 
            name="username" placeholder="Username" />
            {errors && errors.username && (
              <p className="error">{errors.username.message as ReactNode}</p>
            )}
          </div>
          <div className="inputWrapper">
            <input
              {...register("password",{required: true})}
              
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors && errors.password && (
              <p className="error">{errors.password.message as ReactNode}</p>
            )}
          </div>
          {!isLogin && (
            <div className="inputWrapper">
              <input
                {...register("email",{required: false})}
                name="email"
                placeholder="Email (optional)"
              />
              {errors && errors.email && (
                <p className="error">{errors.email.message as ReactNode}</p>
              )}
            </div>
          )}
          <div className="inputWrapper">
            <button type="submit" disabled={isSubmitting}>
              {isLogin ? 'Login' : 'Create account'}
            </button>
          </div>
          <p
            onClick={() => setIsLogin(!isLogin)}
            style={{ cursor: 'pointer', opacity: 0.7 }}
          >
            {isLogin ? 'No account? Create one' : 'Already have an account?'}
          </p>
        </form>
      </div>
    </div>
  );
};
