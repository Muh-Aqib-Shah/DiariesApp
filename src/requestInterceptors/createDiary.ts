import { Response, Request } from 'miragejs';
import { handleErrors } from '../Server';
import { User }  from '../interfaces/user.interface';
import { Diary }  from '../interfaces/diary.interface';
import { showAlert } from "../SweetAlert"
import dayjs from 'dayjs';

const createDiary = (schema: any,req: Request) : {user: User,diary: Diary} | Response => {

    const {title,type,userId} = JSON.parse(req.requestBody);
    let exUser = schema.users.findBy({id: userId})
    if(!exUser){
        showAlert("User Doesnt exist","error");
        return handleErrors(null,"no such user exists")
    }
    let now = dayjs().format('MMMM YYYY');
    const diary = exUser.createDiary({
        title,
        type,
        createdAt: now,
        updatedAt: now,
        userId
    })
    showAlert("Successfull","success")
    return {
        user: {...exUser.attrs},
        diary: diary.attrs
    }
}


export default createDiary;