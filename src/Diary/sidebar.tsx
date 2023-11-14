import { useDispatch } from "react-redux"
import { EntryBox, nextPage, prevPage } from "../app/Slice"
import "./styles.css"

type ParamsKey = {
    prevPageClick : boolean
    nextPageClick : boolean
    newEntryClick: boolean
    updateEntryClick: boolean
    deleteDiaryClick: boolean
    EntryBox : {visibility: boolean,dragdown: boolean}
}

export const Sidebar = () => {
    
    let dispatch  = useDispatch()
     return(
        
        <div className="sidebar">
            <div className="controls">
            <div className="head">Controls</div>
            <button className="cntrl-btn" onClick={()=> dispatch(prevPage())}>Prev Page</button>
            <button className="cntrl-btn" onClick={()=> dispatch(nextPage())}>Next Page</button>
            <button className="cntrl-btn" onClick={()=> dispatch(EntryBox(1))}>New entry</button>
            <button className="cntrl-btn" onClick={()=> 2+2}>Update entry</button>
            <button className="cntrl-btn" onClick={()=> 2+2}>Delete Book</button>
            </div>
            <div className="info">
            <div className="head">Info</div>
            <div className="info-data"><b>ID: </b>{104}</div>
            <div className="info-data"><b>User: </b>{"meow"}</div>
            <div className="info-data"><b>Entry: </b>{10}</div>
            <div className="info-data"><b>Total Entries: </b>{100}</div>
            <div className="info-data"><b>Type: </b>{"private"}</div>
            <div className="info-data"><b>created At: </b>{"19 Dec 2019"}</div>
            </div>
    </div>
    )
}

export default ParamsKey