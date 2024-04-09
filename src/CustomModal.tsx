import React, { useRef } from "react";
import { ModalStyles } from "./styles/CustomeModal";


interface Props{
    open: boolean,
    close: () => void,
    handleSubmit: (message: string | null) => void
    textBoxEnabled : boolean
    head? : string
    preText?: string
}

export const CustomModal: React.FC<Props> = ({ open, close, handleSubmit,textBoxEnabled,head,preText }) => {

    const myRef = useRef<string>(preText ? preText : "Enter...")
    const submit = () =>  handleSubmit(myRef.current)
    
    const wordCounter = (target: string) =>  40 - target.split(/\s+/).length
    if (!open) return null;
  
    return (
        <ModalStyles>
      <div className="Overlay">
        <div className="Content">
        <h2 className="ModalTitle">{head}</h2>
                    {!textBoxEnabled ?
                    <input type="text" placeholder="Enter..." onChange={(e) => myRef.current = e.target.value}/>
                    :
                    <>
                    <textarea id="myTextarea" defaultValue={myRef.current} rows={3} cols={40} placeholder='Enter...' onChange={(e) => {if(wordCounter(myRef.current) > 0) {myRef.current = e.target.value} }}/>
                    <div className="wordCount">Max Words : 40</div>
                    </>
                    }
                    <div className="ButtonContainer">
                    <button className="SubmitButton" onClick={submit}>Submit</button>
                    <button className="CancelButton"onClick={close}>Cancel</button>
                    </div>
      </div>
      </div>
      </ModalStyles>
    );
  };