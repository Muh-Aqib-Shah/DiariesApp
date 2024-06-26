import { Server, Model, Factory, belongsTo, hasMany, Response} from 'miragejs';
import login from "./requestInterceptors/login";
import signup from "./requestInterceptors/signup";
import getDiaries from "./requestInterceptors/getDiaries";
import createDiary from './requestInterceptors/createDiary';
import  getEntries  from './requestInterceptors/getEntries';
import  createEntry  from './requestInterceptors/createEntry';
import  updateEntry  from './requestInterceptors/updateEntry';
import  deleteEntry  from './requestInterceptors/deleteEntry';


export const handleErrors = (error: any, message = 'An error occurred') => {
  return new Response(400, undefined, {
    data: {
      message,
      isError: true,
    },
  });
};

export const MockServer = (env?: string): Server => {
 
  return new Server({
    environment: env ?? 'development',

    models: {
      entry: Model.extend({
        diary: belongsTo(),
        
      }),
      diary: Model.extend({
        entry: hasMany(),
        user: belongsTo(),
      }),
      user: Model.extend({
        diary: hasMany(),
      }),
    },

    factories: {
      user: Factory.extend({
        username: 'test',
        password: 'password',
        email: 'test@email.com',
      }),
    },

    seeds: (server): any => {
      server.create('user');
    },
  
    routes(): void {
      this.urlPrefix = '/fakeapi';

      this.post('/auth/login',login);
      this.post('auth/signup',signup);

      this.get("/diaries/:id",getDiaries)
      this.get("/diary/entries/:id",getEntries)

      this.post("/diary/",createDiary)
      this.post("/diary/entry/:id",createEntry)

      this.put("/diary/updateentry/:id",updateEntry)
      this.delete("/diary/delentry/:id",deleteEntry)
    }
  });
};