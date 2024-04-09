import DescriptionIcon from '@mui/icons-material/Description';
import { Entry } from './interfaces/entry.interface';
import { useAppDispatch } from './appState/store';
import { activeEntryId,getAllEntries } from "./appState/EntrySlice";
import { useState } from 'react';
import { CustomModal } from './CustomModal';
import Request from "./RequestHandler";
import { ModalStyles } from './styles/CustomeModal';

interface Props{
    item : Entry
    len: number
}
export const EntryCard: React.FC<Props> = ({item,len}) => {
    
    let [openUpdateModal,setOpenUpdateModal] = useState(false);
    let [openDelModal,setOpenDelModal] = useState(false);

    const dispatch = useAppDispatch()
    const closeUpdateModal =() => setOpenUpdateModal(false);
    const closeDelModal = () => setOpenDelModal(false);


    const handleUpdateSubmit = (id: string | undefined,data: any) => {
      Request.put("diary/updateentry",id,data).then((item)=> { dispatch(getAllEntries());  dispatch(activeEntryId(item?.id)) })
      closeUpdateModal()
    }
    const handleDelSubmit = (id: string | undefined) => {
      Request.Delete("diary/delentry",id).then(()=> dispatch(getAllEntries()))
      closeDelModal()
    }

    return( 
        <center>
        <div className="list-item" key={item.id} onClick={() => dispatch(activeEntryId(len))}>
                  <div className="iconBox">
                    <center>
                    <DescriptionIcon fontSize="large"/>
                    </center>
                  </div>
                  <div className="detailBox">
                    <div className="list-item-title"><b>{item.title}</b></div>
                    <div className="list-item-date">May 2024 </div>
                  </div>
                  <div className="button-list">
                    <button className="list-btn" id="add" onClick={()=> setOpenUpdateModal(true)}>+ Update Entry</button>
                    <button className="list-btn" id="view" onClick={() => setOpenDelModal(true)}>- Delete Entry</button>
                  </div>    
            </div>
            <CustomModal open={openUpdateModal} close={closeUpdateModal} textBoxEnabled={true} preText={item?.content}
            handleSubmit={(message)=> handleUpdateSubmit(item?.id,{...item,content:message})} head='Update Entry' />
            {openDelModal ?
            <ModalStyles>
              <div className="Overlay">
                <div className="Content">
                    <h2 className="ModalTitle">Are You Sure?</h2>
                    <div className="ButtonContainer">
                    <button className="YesButton" onClick={()=> handleDelSubmit(item?.id)}>Yes</button>
                    <button className="NoButton"onClick={closeDelModal}>Cancel</button>
                    </div>
            </div>
            </div>
            </ModalStyles>
            :
            null
            }
            </center>
)}