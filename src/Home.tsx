import { useEffect , useState } from "react";
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import FeedbackTwoToneIcon from '@mui/icons-material/FeedbackTwoTone';
import { useSelector } from "react-redux";
import { useAppDispatch } from "./appState/store";
import rootState from "./appState/rootState";
import Request from "./RequestHandler";
import { getAllDiaries } from "./appState/DiarySlice";
import { activeEntryId, getAllEntries } from "./appState/EntrySlice";
import { Diary } from "./interfaces/diary.interface";
import { activeDiaryId } from "./appState/DiarySlice";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomModal } from "./CustomModal";
import { DiaryCard } from "./DiaryCard";
import { EntryCard } from "./EntryCard";
import { HomeStyles } from "./styles/customHome";
import { useNavigate } from "react-router-dom";
import { setAuthState } from "./appState/AuthSlice";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const Home = () => { 

    var AllDiaries = useSelector((state: rootState)=> state.diary.diaries)
    const AllEntries = useSelector((state: rootState)=> state.entry.entries)
    var activeDiaryID = useSelector((state: rootState)=> state.diary.activeDiaryID)
    var activeEntryID = useSelector((state: rootState) => state.entry.activeEntryID)
    var user = useSelector((state: rootState) => state.user)
    var isAuthenticated = useSelector((state: rootState) => state.auth.isAuthenticated)
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [Diaries,setDiaries] = useState<Diary[]>()
    const [canEditDiary,setCanEditDiary] = useState(false);
    const [addEntry,setEntry] = useState(false);
    const [updateDiary,setupdateDiary] = useState(false)
    const [updateEntry,setupdateEntry] = useState(false);
    const [logout,setLogout] = useState(false);
    
    useEffect(()=>{
        if(!isAuthenticated)
            navigate("/")
    },[isAuthenticated,navigate])

    useEffect(()=>{
        setDiaries(AllDiaries);
    },[AllDiaries])
    
    useEffect(()=>{
        if(activeDiaryID){
            dispatch(getAllEntries()); 
            setupdateEntry(false)
        }
    },[activeDiaryID,updateEntry,dispatch])


    useEffect(()=>{
        dispatch(getAllDiaries());
        setupdateDiary(false);
    },[updateDiary,dispatch])
    
    return (
        <HomeStyles>
        <div className="cont">
            <div className="list">
                {!activeDiaryID ?
                <div className="listitems-cntr"> 
                <center>
                <div className="crt-new-btndiv">
                    <button className="crt-new-btn" onClick={ () => setCanEditDiary(!canEditDiary) }>
                    Create New </button>  
                </div>
                
                <CustomModal open={canEditDiary} close={()=> setCanEditDiary(false)}  textBoxEnabled={false} head="Diary Name"
                    handleSubmit={(message)=>{ Request.post('fakeapi/diary/',{title: message,type: "private",userId: user?.id}).then(dat=> dispatch(activeDiaryId(dat.diary.id)))
                    setCanEditDiary(false)
                    setupdateDiary(true) }}
                />
                    
                {Diaries?.map(item => <DiaryCard item={item} />)}

                </center>
                <div className="bottom-avtr">
                {logout && <div className="logout-optn" onClick={()=> dispatch(setAuthState(false))}>Logout</div>}
                <AccountCircleOutlinedIcon className="logoutIcon" fontSize="large" onClick={() => setLogout(!logout)} />             
                </div>
                </div>
                : 
                <>
                <div className="btn-cntr">
                    <div className="backToDiaries" onClick={() => dispatch(activeDiaryId(null))}><ArrowBackIcon fontSize="large"/></div>
                    <button className="addEntry" onClick={()=> setEntry(true)}>Add Entry</button> 
                </div>
                <CustomModal open={addEntry} close={()=> setEntry(false)} textBoxEnabled={true} head="Entry Name" preText=" "
                    handleSubmit={(message) => {
                        Request.post(`fakeapi/diary/entry/${activeDiaryID}`,
                        {title: `Entry${AllEntries.length}`,content: message})
                        .then((item) => { dispatch(activeEntryId(item.entry.id))})
                        setEntry(false)
                        setupdateEntry(true)  }}
                />
                {  AllEntries.map((item,length) => <EntryCard item={item} len={length} />) }
            </>
            }
            </div>
            
            <div className="entry">
                {AllDiaries.length === 0 ? 
                <div className="entries-cntr">
                <div className="empty-icon"><FeedbackTwoToneIcon fontSize="large"/></div>
                <div className="empty-iconText">Select a Diary to view it's entries!</div>
                </div>
                :
                AllEntries.length === 0 && !addEntry?
                <div>
                <div className="empty-icon"><QueueOutlinedIcon fontSize="large"
                onClick = {()=> (setEntry(true))}
                />
                </div>
                <div className="empty-iconText">Start entering entries to show over here!</div>
                </div>
                :
                <div className="entry-box">
                    <div className = "contents">
                    <p className="content-cntr">
                       {AllEntries[activeEntryID]?.content ?? "" } 
                    </p>
                    </div>
                </div>
                }
            </div>
        </div>
        </HomeStyles>
    )
}