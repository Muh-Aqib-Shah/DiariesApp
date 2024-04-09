import styled from 'styled-components';
import image from "../images/diary-background2.jpg"

export const HomeStyles = styled.div`
.cont{
    height: 100vh;
    width : 100vw;
    background-color: whitesmoke;
    display: flex;
    flex-direction: row;
    position: relative;
}
.list{
    background-color: #778899;
    height : 100%;
    overflow-y: auto;
    padding-top: 10px;
    flex-basis: 25%;
    position: relative;
}  
.listitems-cntr{
    height: 90%;
}

.list .bottom-avtr{
    position: absolute;
    bottom: 0;
    left: 5px;
}
.logoutIcon{
    position: relative;
}
.logout-optn{
    background-color: #fff;
    z-index: 2;
}
.logoutIcon .logout-optn{
    position: absolute;
    top: 0;
    left: 15px;
}
.crt-new-btndiv{
    width: 90%;
    height: 40px;
    margin: 40px 0;
    position: -webkit-sticky; 
    position: sticky;
    top: 20px; 
    z-index: 2;
}
.crt-new-btn{
    background-color: #fff;
    color: #0d0d0d;
    width: 100%;
    height: 100%;
    font-family: monospace;
}
.list-item{
    text-align: left;
    height: auto;
    width: 80%;
    border: 3px solid black;
    border-radius: 10px 10px 10px 10px;
    margin: 15px 0;
    background-color: silver;
    box-shadow: 3px 3px 10px black
}
.iconBox{
    display: inline-block;
    height: 100%;
    width: 25%;
}
.detailBox{
    display: inline-block;
    height: 80%;
    width: 75%;
}
.list-item-title{
    height: 75%
}
.list-item-date{
    height: 25%;
    border-top: 1px solid black;
    font-size: xx-small;
    display: flex;
    justify-content: flex-end;
}
.button-list{
    display: flex;
    flex-direction: row;
}
.list-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 10px;
    font-size: xx-small;
}  
#add{
    background-color: white;
    color: grey;
}
#view{
    background-color: grey;
    color: white;
}
.entry{
    flex-basis: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative
}
.empty-icon{
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 2%;
}
.empty-iconText{
    font-size: x-large;
    font-weight: 100;
    font-family: monospace;
}
.entry-box{
    height: 80%;
    width: 65%;
    position: relative
}
.btn-cntr{
    display: flex;
    justify-content: space-between;
}
.backToDiaries{
    width: 15%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
   
}
.addEntry{
    width: 85%;
    height:100%;
    background-color: #fff;
    color: #778899;
    font-family: monospace;
}
.contents{
    margin-top: 100px;
}
.content-cntr{
    font-family: 'Indie Flower', monospace;
    white-space: pre-wrap;
    height: auto;
    font-size: 40px
}
@media (max-width: 768px) {
 .diaryTitle {
      margin-left: 10px;
 }
 .button-list{
      flex-direction: column;
 }
 .list-btn{
      width: 100%;
 }
 .entries-cntr,.entry-box{
      margin-left: 200px;
 }
 .content-cntr{
      font-size: 30px;
 }
}

`