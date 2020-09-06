import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render () {
        return (
          <div className="main-nav">
              <ul>
                <li><NavLink to="/sunsets"> Sunsets </NavLink></li>
                <li><NavLink to="/waterfall"> Waterfalls </NavLink></li>
                <li><NavLink to="/mountains"> Mountains </NavLink></li>
              </ul>
         </div>
        )
    }
}  

export default Nav;
