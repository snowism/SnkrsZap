import React, { Component } from 'react'
import { navigate } from "@reach/router";





export default class SiteButton extends Component {
    render() {
        return (
            <div>
                  <button onClick={this.props.action} style={this.props.style}>
        
          {this.props.message }   {this.props.icon}
          {/* || is a javascript OR */}  {/* "set text via props" */}
        

        </button>
            </div>
        )
    }
}
