import { Server,Request,Model,Factory,hasMany,belongsTo } from "miragejs"

export const MockServer = (env?: string): Server => {
   

    return new Server({
        environment: env ?? "development",
       
        models: {
            
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