import { showAlert } from "../SweetAlert";
import { Request } from 'miragejs';
import { Entry } from "../interfaces/entry.interface";

const getEntries = (schema: any,req: Request): { entries: Entry[] | []} => {
    try {
      const diary = schema.diaries.find(req.params.id);
      
      return diary.entry;
    } catch (error) {
        showAlert("Failed to get entries","error")
      return {entries: []}
    }
};

export default getEntries;