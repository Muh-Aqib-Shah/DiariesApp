import "./styles.css"
import diary from "./images/diaryVector.png"
import { Sidebar } from "./sidebar"
import { Entry } from "./Entry"
import useWebAnimations from "@wellyshen/use-web-animations"
import { useDispatch,useSelector } from "react-redux"
import ObjectType from "./sidebar"
import { useState } from "react"

export const Diary = () => {
  let GlobalState = useSelector<ObjectType,ObjectType>((state) => state)

    return(
      <div className="container">
        <Sidebar />
        <Entry />
        <div className="book">
          <div  className="diaryContainer">
            <img  src={diary} alt="book" className="diaryImage"/>
          </div>
        </div>
        </div>
    )
}
