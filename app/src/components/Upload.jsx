import React, { Component } from "react";
import Axios from "axios";
import Modal from "./Modal";
import { navigate } from "@reach/router";


export default class Upload extends Component {
  constructor(props) {
    super(props);
    //state matches express model - the model is case-sensitive
    this.state = {
      name: "",
      newprice: "",
      usedprice:"",
      filepath: "",
      selectedFile: null,
      id: Date.now(),
      showmodal: false,

    };
  }

  onConfirm = e => {

    console.log("clicked confirm")
    navigate(`/`);
    

}


  handleSubmit = (event) => {
    console.log("new item - check MongoDB");
    Axios.post("http://localhost:4000/api/sneakers", this.state).then((res) => {
      console.table(res);

      if(res.statusText === "OK"){
        this.setState({ showmodal:true });
      }
    });
    event.preventDefault();
  };



  handleFilepath = e => {
    this.setState({ filepath: e.target.value });
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleBrand = (e) => {
    this.setState({ brand: e.target.value });
  }

  handlePrice = (e) => {
    this.setState({ newprice: e.target.value });
  };
  handleUsedPrice = (e) => {
    this.setState({ usedprice: e.target.value });
  };

  onClose = e => {
    this.setState({ showmodal:false });
  }
  





  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
            <h3>Sell your item</h3>

            
           

          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="product name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>
          <div>
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={this.state.brand}
              onChange={this.handleBrand}
            />
          </div>

          <div>
            <label>Price</label>
            <input
              type="text"
              name="price"
              placeholder="new item price"
              value={this.state.newprice}
              onChange={this.handlePrice}
            />
          </div>
          <div>
            <label>Used Price</label>
            <input
              type="text"
              name="Used Price"
              placeholder="used item price"
              value={this.state.usedprice}
              onChange={this.handleUsedPrice}
            />
          </div>
         
          <div>
            <label>Image file path</label>
            <input
              type="text"
              name="filepath"
              placeholder=".jpg, .png, .gif etc"
              value={this.state.filepath}
              onChange={this.handleFilepath}
            />
          </div>
          <input type="hidden" name="id" value={this.state.id} />

          <button className="submit-btn" type="submit">Submit</button>
        </form>
        <Modal showmodal={this.state.showmodal} title={"Upload success"} message={"SWEET"} action={this.onConfirm}/>
      </div>
    );
  }
}