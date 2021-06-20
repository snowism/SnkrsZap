import React, { Component } from 'react'
import { Link } from '@reach/router'

export default class SelectBrand extends Component {
    render() {
        return (
            <React.Fragment>
              <h3 className="title"> Select by brand </h3>
      <div className="select-box">
        <Link to="/show-nike"><div className="logo-box"><img src="./images/logo_n.png"/></div></Link>
        <Link to="/show-adidas"><div className="logo-box"><img src="./images/logo_a.png"/></div></Link>
        <Link to="/show-jordan"><div className="logo-box"><img src="./images/logo_j.png"/></div></Link>
        
      </div>
      </React.Fragment>
        )
    }
}
