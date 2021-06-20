import React, { Component } from 'react'
import { navigate } from "@reach/router";
import SiteButton from "./SiteButton";

var blackBtnStyle = {
    width: "180px",
    height: "30px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius:"20px",
}


 
export default class OrderConfirm extends Component {

    goToHome = (e) => {
        navigate(`/`);
        
          } 


    render() {
        return (
            <div>
                <div className="order-confirm">
<img src="/images/checked.png"/>

<h3>Congratulations! </h3>
<p>   Your order has been succesfully placed <br/>
                         and is being processed by SNKRS ZAP team.<br/>
We have send you an email with all the details <br/>you need to know about your purchase.<br/>
                         </p>
</div>

<div className="button-box">
          
          <SiteButton message="Continue Shopping" style={blackBtnStyle} action={this.goToHome}/>
        </div>
            </div>
        )
    }
}
