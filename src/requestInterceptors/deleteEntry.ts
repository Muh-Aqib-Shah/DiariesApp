import { Request,Response } from 'miragejs';
import { showAlert } from '../SweetAlert';
import { handleErrors } from '../Server';
import { Diary } from '../interfaces/diary.interface';

const deleteEntry = (schema: any ,req: Request) : Diary | Response => {
    const entryId = req.params.id;
    let diary;
    if(entryId){
      diary = schema.diaries.find(schema.entries.find(entryId).attrs.diaryId);
      schema.entries.find(entryId).destroy();
      showAlert("Deleted Successfully","success")
      return diary;
    }
    else{
      showAlert("Cannot Delete","error")
      return handleErrors(404, 'Failed to update entry.');
    }
  }

export default deleteEntry;