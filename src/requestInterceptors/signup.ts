import { Response, Request } from 'miragejs';
import { handleErrors } from '../Server';
import { User } from '../interfaces/user.interface';
import { v4 } from 'uuid';
import { showAlert } from "../SweetAlert"


const generateToken = () => v4();

export interface AuthResponse {
    token: string;
    user: User;
}

const signup = (schema: any,req: Request) : AuthResponse | Response => {
    const signInInfo = JSON.parse(req.requestBody);
    
    const user = schema.users.findBy({username : signInInfo.username});
    if(user){
        showAlert("Username is already taken","error")
        return handleErrors(null,"Username is already taken")
    }
    else{
        showAlert("Account created successfully","success")
        const user = schema.users.create(signInInfo);
        const token = generateToken();
        return {
          user: user.attrs as User,
          token,
        };
};
}
export default signup;