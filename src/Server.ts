import { Server, Model, Factory, belongsTo, hasMany, Response} from 'miragejs';
import login from "./requestInterceptors/login";
import signup from "./requestInterceptors/signup";
import getDiaries from "./requestInterceptors/getDiaries";
import createDiary from './requestInterceptors/createDiary';


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

      this.get("/diaries/",getDiaries)

      this.post("/diary/",createDiary)
    }
  });
};

























/*import { Server,Request,Model,Factory,hasMany,belongsTo } from "miragejs"

export const MockServer = (env?: string): Server => {
   

    return new Server({
        environment: env ?? "development",
        
        models: {
            diary: Model.extend({
              entry: hasMany(),
              user: belongsTo(),
              
              serialize() {
                const json: any  = 
                
                delete json.entry;
                delete json.user;
            
                return json;
              },
              }),
            user: Model.extend({
              diary: hasMany(),
              serialize() {
                const json = Model.prototype.serialize.apply(this, arguments);
            
                // Omit the 'diary' relationship when serializing 'user'
                delete json.diary;
            
                return json;
              },  
            }),
          },
        
        factories: {
            user: Factory.extend({
                username: "abcd",
                password: "12345678",
                email: "testing@xy.z"
            })
        },
        seeds: (server): any => {
            server.create('user')

        },
        
        routes(){
            
            this.urlPrefix =  "/fakeapi"


            this.get("/users",() =>  {return {abcd: "efgh"}});
            this.post("/auth/login",(_,req) => { console.log("Getting in mirage: ",_," and ",req.requestBody); return {response: _,request: req}})
        }})
    }


//creating a diary app

//declare types
//create miraje server
//declare relationships and redirect functions to respected urls
//create authorotive functions of login and signup
//setup redux store
//create slices for diary,entry,user authortive state
//setup sara frontend

/*things i am facing difficulty in:
1. https reuest intercepting
2. sweet alert, dayjs new concepts
3. figuring out parameters in function passed to mirage upon a specific url
4. figuring out yup object and form
5. configuring sara backend to work with frontend
*/