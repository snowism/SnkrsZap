import React, { Component } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";
import SiteButton from "./SiteButton";


export default class CommentsCard extends Component {
 

  render() {
    return (
       
      <div className="comment-card">
        <div className="row">
          <p>{this.props.username}</p>
          <span className="item-name">{this.props.item}</span>
        </div>

        <div className="review-box">
          <p>{this.props.review}</p>
        </div>

      
      </div>
      
    );
  }
}
