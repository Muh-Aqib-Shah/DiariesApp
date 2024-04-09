import { Request } from 'miragejs';
import { Diary } from '../interfaces/diary.interface';

const getDiaries = (schema: any,req: Request) : Diary[] | null => {
    try{
        let user = schema.users.find(req.params.id);        
        return user.diary as Diary[]
    }
    catch(err){        
        return null;
    }
}

export default getDiaries;