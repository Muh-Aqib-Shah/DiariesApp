import { Response, Request } from 'miragejs';
import { handleErrors } from '../Server';
import { Diary }  from '../interfaces/diary.interface';
import { Entry }  from '../interfaces/entry.interface';
import dayjs from 'dayjs';

const createEntry = (
    schema: any,
    req: Request
  ): { diary: Diary; entry: Entry } | Response => {
    try {
      const diary = schema.diaries.find(req.params.id);
      const { title, content } = JSON.parse(req.requestBody) as Partial<Entry>;
      const now = dayjs().format('MMMM YYYY');
      const entry = diary.createEntry({
        title,
        content,
        createdAt: now,
        updatedAt: now,
      });
      diary.update({
        ...diary.attrs,
        updatedAt: now,
      });
      return {
        diary: diary.attrs,
        entry: entry.attrs,
      };
    } catch (error) {
      return handleErrors(error, 'Failed to save entry.');
    }
  };

export default createEntry;