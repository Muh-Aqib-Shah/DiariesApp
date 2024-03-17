import { FormEvent, useRef, useState } from "react";
import "./App.css"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useSelector } from "react-redux";
import { useAppDispatch } from "./appState/store";
import rootState from "./appState/rootState";
import Request from "./RequestHandler";
import Swal from 'sweetalert2';
import { addDiary } from "./appState/DiarySlice";
import { getAllDiaries } from "./appState/DiarySlice";
import { Diary } from "./interfaces/diary.interface";

let glob = true;

export const Home = () => { 
    
    type itemsss = {
        name : string,
        date: Date
    }
    let [state,setState] = useState(false);
    let mystate = useSelector((state: rootState)=> state.diary.diaries)
    let user = useSelector((state: rootState) => state.user)
   console.log("my state diaries: ",mystate)
    const dispatch = useAppDispatch();
    const requestDiary = () => {
         dispatch(getAllDiaries());
        /*
        Request.get(
             'fakeapi/diaries')
             .then(dat => {
            if(dat){
            console.log("DONW WITH CREATING: ",dat);
            
            setState(true);
            }
        })
        //Swal.fire({titleText: 'All done!',confirmButtonText: 'OK!',}))
        .catch(dat =>  Swal.fire({ titleText: 'Cancelled', }))*/
      }
    
    
    if(true && glob){
        requestDiary(); 
        glob = false;
    }
    const myRef = useRef<string | null>("");
    const [items,setItems] = useState<itemsss[]>([{name: "Vacation",date: new Date()},{name: 'Beach Trip',date: new Date("12-12-2020")},{name: "School Diary",date: new Date("07-07-2024")}])
    const [editing,setEditing] = useState(false);
    const [addEntry,setEntry] = useState(true);
    const [entries,setEntries] = useState(["We went to central park","There were alot of rides","Next, we went to the rides","I sat on a roller coaster"])
    
    return (
        <div className="cont">
            <div className="list">
                <center>
                <div className="crt-new-btndiv">
                    <button className="crt-new-btn" 
                    onClick={
                        () => 
                        {
                        setItems(prv => {return [...prv,{name:"",date: new Date()}]})
                        setEditing(true) 
                        }}>
                Create New
                </button> 
                </div>
                
                {items.map((item,length) => { return <div className="list-item" key={item.name}>
                   <div className="iconBox">
                    <center>
                    <MenuBookIcon fontSize="large"/>
                    </center>
                    </div>
                   <div className="detailBox">
                    {length == items.length - 1  && editing ? 
                    <form onSubmit={(e: FormEvent<HTMLFormElement>) => {                        
                        e.preventDefault() 
                        
                        let newObject: itemsss = {name: myRef?.current ?? "",date : new Date()};
                        let newAry: itemsss[] = items.slice(0,items.length-1)
                        newAry.push(newObject)
                        setItems(newAry)
                        setEditing(false)
                    }}>

                    <input className="list-item-title" placeholder="Enter Title" 
                    onChange={(e) => myRef.current = e.target.value}/>
                   </form >
                   :
                   <div className="list-item-title"><b>{item.name}</b></div>
                  
                   
                   }
                   <div className="list-item-date">{item.date.getFullYear()} </div>
                   </div>
                   <div className="button-list">
                   <button className="list-btn" id="add">+ Add Entries</button>
                   <button className="list-btn" id="view">- View Entries</button>
                   </div>

                </div>
                })}
                </center>
            </div>
            <div className="entry">
                <div className="entry-box">
                    <div className = "contents">
                    <ul>
                        {entries.map(item => <li className="entry-li" key={item}>
                            {item}
                            <button className="del-entry">X</button>
                        </li>)}
                    </ul> 
                    </div>
                    {addEntry ? 
                    <div className="addEntry">
                    <button className="addEntrybtn" onClick={()=> setEntry(false)}>Add Entry</button> 
                    </div>
                    :
                    <form onSubmit={(e: FormEvent<HTMLFormElement>)=> {
                        e.preventDefault()
                        console.log("WORKEDD");
                        setEntry(true)
                        
                        setEntries(prev => [...prev,myRef.current ? myRef.current : ""])
                    }}>
                    <input className="entry-input" placeholder="Enter Text..." onChange={(e)=> myRef.current = e.target.value}/>
                    </form>
                    }
                </div>               
            </div>
        </div>
    )
}