import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup';
import Request from "./RequestHandler";
import { useAppDispatch } from "./appState/store";
import { useNavigate } from "react-router-dom";
import { setUser } from "./appState/UserSlice";
import { FormStyles } from "./styles/customLogin";
import { saveToken, setAuthState } from "./appState/AuthSlice";

export const Form = () => {
   
const schema = Yup.object().shape({
    username: Yup.string().required("Enter a valid username!").max(16,"maximum characters are 16"),
    password: Yup.string().required("Enter a valid password").min(8,"password must contain atleast 8 characters"),
    email: Yup.string().email("Enter a email like abc@x.yz.com")
});
  const dispatch = useAppDispatch();
  let navigator = useNavigate();

let {handleSubmit,register,formState: {errors,isSubmitting}} =  useForm({
  resolver: yupResolver(schema)
})
const [isLogin,setIsLogin] = useState(true)

const submitForm = async (data: any) =>{
    
    Request.post(`fakeapi/auth/${isLogin ? "login" : "signup" }`,data)
    .then(({user,token}) => {
        if (token) {
          dispatch(setUser(user));
          dispatch(saveToken(token))
          dispatch(setAuthState(true))
          setTimeout(()=> navigator("/diaries"),500)
        }
    }).catch((error) => {  console.log(error)  })
}

return (
  <FormStyles>
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
  </FormStyles>
  );
};
