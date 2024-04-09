import React from "react";
import { activeDiaryId } from "./appState/DiarySlice";
import { useAppDispatch } from "./appState/store";
import { Diary } from "./interfaces/diary.interface";
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface Props{
    item: Diary
}
export const DiaryCard : React.FC<Props>=({item}) => {

    const dispatch = useAppDispatch()
    return( 
        <div className="list-item" key={item.id} onClick={()=> dispatch(activeDiaryId(item?.id ?? null))}>
            <div className="iconBox">
            <center>
            <MenuBookIcon fontSize="large"/>
            </center>
        </div>
        <div className="detailBox">  
            <div className="list-item-title"><b className="diaryTitle">{item.title}</b></div>   
            <div className="list-item-date">{item.updatedAt}</div>
        </div>
        <div className="button-list">
            <button className="list-btn" id="add">+ Add Entries</button>
            <button className="list-btn" id="view">- View Entries</button>
        </div>
    </div>
)}