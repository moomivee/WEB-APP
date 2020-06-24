import React, { Component } from 'react';
import Navibar from "./navibar/Navibar";
import Firstpage from "./first-page/firstpage";
import Secondpage from "./second-page/secondpage";
import Thirdpage from "./third-page/thirdpage";
import Fourthpage from "./forth-page/fourthpage";
import Fifthpage from "./fifth-page/fifthpage";
import Sixthpage from "./sixth-page/sixth";
import Footer from "./footer/footer"; 

export default class Home extends Component {
    render() {
       return ( <div> <Navibar/> 
            <Firstpage/> 
            <Secondpage/>
            <Thirdpage/>
            <Fourthpage/>
            <Fifthpage/>
            <Sixthpage/>
            <Footer/>
        </div>)
    }
}