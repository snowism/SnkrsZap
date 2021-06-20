import React, { Component } from 'react';
import Axios from "axios";
import SingleCard from "./SingleCard";


export default class Adidas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sneakersArray: [],
      brand: [],
    };
  }


  componentDidMount() {
    Axios.get(`http://localhost:4000/api/sneakers/`).then((res) => {


      console.table(res.data);
      this.setState({
        sneakersArray: res.data,
      });
    });
  }

  render() {



    return (

      <div className="card-box">
        {this.state.sneakersArray.map((item, index) => {


          if (item.brand === "ADIDAS") {

            return (


              <SingleCard
                key={index} snow
                name={item.name}
                price={item.newprice}
                usedPrice={item.oldprice}
                brand={item.brand}
                filepath={item.filepath}
                id={item.id}
              />




            )
          }




        })}        </div>

    );
  }
}
