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

const login = (schema: any,req: Request) : AuthResponse | Response => {
    const {username,password} = JSON.parse(req.requestBody);
    
    const user = schema.users.findBy({username});
    if(!user){
        showAlert("No user with that name exists","error")
        return handleErrors(null,"No user with that username exists");
    }
    else if(password !== user.password){
        showAlert("Incorrect Password","error")
        return handleErrors(null,"Password is incorrect")
    }
    const token = generateToken();
    return {
    user: user.attrs as User,
    token,
  
};
}
export default login;