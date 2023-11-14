import useWebAnimations from "@wellyshen/use-web-animations"
import { useState } from "react"
import { useSelector } from "react-redux";
import "./styles.css"
import ObjectType from "./sidebar"
import { useDispatch } from "react-redux";
import { EntryBox, nextPage, prevPage } from "../app/Slice"


type myType = {
  visibility: boolean,
  dragdown : boolean
}

export const Entry = () => {

  let visibility = useSelector<ObjectType,myType>((state) => state.EntryBox)
  let dispatch = useDispatch() 
  
  return (
        <div  className="entry-box" style={{display : `${visibility.visibility ? "block" : "none"}`}}>
          <form>
            <label>Title
                <input type="text" />
            </label>
            <label>Content </label><br />
            <textarea id="largeText" name="largeText" ></textarea>
          </form>
          <div className="form-btns">
            <button className="btnn" id="btn-1" onClick={()=>dispatch(EntryBox(1))}>Cancel</button>
            <button className="btnn" id="btn-2">Submit</button>
          </div>
        </div>
    )
}