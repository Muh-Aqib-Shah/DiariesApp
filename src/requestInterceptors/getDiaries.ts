import { Response, Request } from 'miragejs';
import { handleErrors } from '../Server';
import { Diary } from '../interfaces/diary.interface';

const getDiaries = (schema: any,req: Request) : Diary | Response=> {
    console.log("DIARY METHODS: ",schema.diaries)
    return [] as Diary[];
    try{
        let user = schema.users.find(req.params.id);
        console.log("DIARY TO RETRIVE FROM: ",user);
        
        return user.diary as Diary
    }
    catch(err){
        return handleErrors(err,"Could not get diaries");
    }

}

export default getDiaries;