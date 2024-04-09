import styled from 'styled-components';

export const ModalStyles = styled.div`
.Overlay{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.Content{
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}
.ModalTitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}  
.ButtonContainer {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}  
.SubmitButton,
.CancelButton {
    padding: 8px 16px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}  
.SubmitButton {
    background-color: #778899;
    color: #fff;
}
.CancelButton {
    border: 2px solid #ccc;
    background-color: #fff;
    color: #ccc;
}
.YesButton,.NoButton{
    width: 20%;
    background-color: #fff;
    border: none;
    box-shadow: none;
}
.YesButton{
    color : green
}
.NoButton{
    color: red;
}
`