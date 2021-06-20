import React, { Component } from 'react';
import { Link, navigate } from "@reach/router";
import SiteButton from './SiteButton';

var blackBtnStyle = {
    width: "120px",
    height: "30px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius:"20px",
}

var whiteBtnStyle = {
    width: "80px",
    height: "30px",
    background: "white",
    color: "black",
    border: "none",
    borderRadius:"20px",
}

export default class Payment extends React.Component {
    state={ Name_on_card:'',
            Card_Number:'',
            Expiry_Date:'',
            CVV:''
    }

    handleChange = (e) =>{
        const{name,value} =e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()

    }
    
    navigateBack = (e) => {
        navigate(-1);
      };
      goToConfirm = (e) => {
    navigate(`/order-confirm`);
    
      } 

    

    render() {
        return (
            <div className="payment">
                <div class="payment_container">
                
                     <h3>Payment Method</h3>

                     <form className="form-pay">

                      <div className="form_container">  
                     <h2>Name on card</h2>
                     <input type='Name on card'name='Name_on_card' 
                     placeholder='"e.g. john green"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                    <h2>Card Number</h2>
                     <input type='Card Number'name='Card_Number' 
                     placeholder='"8888-8888-8888-8888"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                     <h2>Expiry Date</h2>
                     <input type='Expiry Date'name='Expiry_Date' 
                     placeholder='"MM/YY"' autoComplete='off' 
                     required onChange={this.handleChange}/>

                     <h2>CVV</h2>
                     <input type='CVV'name='CVV' 
                     placeholder='"564"' autoComplete='off' 
                     required onChange={this.handleChange}/>
                     </div> 

             </form>
                
     </div>   
                
     <div className="button-box">
                 <SiteButton message="Back" action={this.navigateBack} style={whiteBtnStyle}/>
          <SiteButton message="Confirm" style={blackBtnStyle} action={this.goToConfirm}/>
                 </div>

            </div>
        )
    }
}