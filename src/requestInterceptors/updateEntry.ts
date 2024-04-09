import { Request,Response } from 'miragejs';
import { Entry } from '../interfaces/entry.interface';
import dayjs from 'dayjs';
import { showAlert } from '../SweetAlert';
import { handleErrors } from '../Server';

const updateEntry = (schema: any,req: Request) : Entry | Response => {
    try {
        const entry = schema.entries.find(req.params.id);
        const data = JSON.parse(req.requestBody) as Partial<Entry>;
        const now = dayjs().format('MMMM YYYY');
        entry.update({
          ...data,
          updatedAt: now,
        });
        showAlert("Updated Successfully","success")
        return entry.attrs as Entry;
      } catch (error) {
        showAlert("Cannot Update!","error")
        return handleErrors(error, 'Failed to update entry.');
      }
   
}

export default updateEntry;