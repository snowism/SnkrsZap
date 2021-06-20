import React, { Component } from "react";
import Axios from "axios";
import Modal from "./Modal";


export default class AddComment extends Component {
  constructor(props) {
    super(props);
    //state matches express model - the model is case-sensitive
    this.state = {
      username:"",
      item:"",
      review:"",
      id: Date.now(),
      showmodal: false,

    };
  }

  handleSubmit = (event) => {
    console.log("new comment - check MongoDB");
    Axios.post("http://localhost:4000/api/comments", this.state).then((res) => {
      console.table(res);

      if(res.statusText === "OK"){
        this.setState({ showmodal:true });
      }
    });
    event.preventDefault();
  };



  

  handleUserName = (e) => {
    this.setState({ username: e.target.value });
  };

  handleItem = (e) => {
    this.setState({ item: e.target.value });
  };
  handleReview = (e) => {
    this.setState({ review: e.target.value });
  };

  onClose = e => {
    this.setState({ showmodal:false });
   
  }
  



  render() {
    return (
      <div className="co-form-wrapper">

<h3 className="title">User Comments</h3>


        <form onSubmit={this.handleSubmit}>
        
        <div className="row">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="user name"
              value={this.state.username}
              onChange={this.handleUserName}
            />
          </div>


          <div>
            <label>Item</label>
            <input
              type="text"
              name="item"
              placeholder="item"
              value={this.state.item}
              onChange={this.handleItem}
            />
          </div>
         
          </div>
          <div>
            <label>comments</label>
            <textarea 
              type="text"
              name="comments"
              placeholder="leave your comments"
              value={this.state.review}
              onChange={this.handleReview}
            />
          </div>
          <input type="hidden" name="id" value={this.state.id} />

          <button className="submit-btn" type="submit">Add comment</button>
        </form>
        <Modal showmodal={this.state.showmodal} action={this.onClose} title={"successful uploaded"} message={"SWEET"}/>
      </div>
    );
  }
}