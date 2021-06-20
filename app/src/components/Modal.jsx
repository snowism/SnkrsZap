import React, { Component } from "react";


var modalStyle = {
    position:"absolute",
    top:"20%",
    left:"0%",
    backgroundColor: "rgba(55, 55, 45, 1)",
    width:"80vw",
    height:"30vh",
    color:"snow",
    zIndex: 1000,
}

var modalBtnstyle = {
  width: "120px",
  height: "26px",
  background: "black",
  color: "white",
  border: "none",
  borderRadius:"20px",
  marginBottom: "0.6rem",

}




class Modal extends Component {
  render() {
    if (this.props.showmodal === false) {
      // if we return null from a render method React will ignore ther component
      return null;
    }
    return (
      <div className="my-modal" style={modalStyle}>
        <h2>{this.props.title}</h2>
        <button onClick={this.props.action} style={modalBtnstyle}>{this.props.message}</button>
        <div >{this.props.children}</div>
     
      </div>
    );
  }
}

export default Modal;