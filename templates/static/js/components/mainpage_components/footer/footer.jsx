import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    render(){
        return(

            <div className = "footer-wrapper">
                <a className="footer-agreement">Пользовательское соглашение</a>
                <p className ="footer-license">©2019 Образовательная платформа ASE Platform. All rights reserved.</p>
            </div>

        );
    }
}

export default Footer;