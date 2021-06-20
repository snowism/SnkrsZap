import React, { Component } from "react";
import Axios from "axios";
import SingleCard from "./SingleCard";
import SelectBrand from "./SelectBrand";

//all product

export default class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sneakersArray: [],
      showmodal: false,
    };
  }


  componentDidMount() {

    this.loadAllSneakers();
  }

  loadAllSneakers=(e)=>{
    Axios.get(`http://localhost:4000/api/sneakers/`).then((res) => {
      console.table(res.data);
      this.setState({
        sneakersArray: res.data,
      });
    });
  }
  
  render() {
    return (
     
      <React.Fragment>
        
        <SelectBrand/>
        
      <h3 className="title">Featured</h3>
     
     <div className="card-box">
        {this.state.sneakersArray.map((item, index) => {
          return (
           
            

            <SingleCard
              key={index}
              name={item.name}
              price={item.newprice}
              usedPrice={item.oldprice}
              brand={item.brand}
             id={item.id}
             filepath = {item.filepath}
             onSuccessfulDeletion={this.loadAllSneakers}
            />
            
          );
        })}
       </div>
      </React.Fragment>
    );
  }
}