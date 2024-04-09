const get = async (api: string) => {
      
    let data = await (await fetch(`/fakeapi/${api}`)).json()
    return data;
}

const post = async (api : string,data: any) => {
      
    let mydata = await (await fetch(`${api}`,{
        method: "POST",
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(data)
    })).json()
    return mydata;
}
const put = async (api : string,param: string | undefined,data: any) => {
      
    let mydata = await (await fetch(`/fakeapi/${api}/${param}`,{
        method: "PUT",
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(data)
    })).json()
    return mydata;
    
}
const Delete = async (api : string,param: string | undefined) => {
      
    let mydata = await (await fetch(`/fakeapi/${api}/${param}`,{
        method: "DELETE",
        headers: {
            'Content-Type' : "application/json"
        }})).json()
    return mydata;
}
const funcs = {get,post,put,Delete}
export default funcs;