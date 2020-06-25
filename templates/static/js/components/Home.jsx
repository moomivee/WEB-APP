import React, { Component } from 'react';
import Navibar from "./mainpage_components/navibar/Navibar";
import Firstpage from "./mainpage_components/first-page/firstpage";
import Secondpage from "./mainpage_components/second-page/secondpage";
import Thirdpage from "./mainpage_components/third-page/thirdpage";
import Fourthpage from "./mainpage_components/forth-page/fourthpage";
import Fifthpage from "./mainpage_components/fifth-page/fifthpage";
import Sixthpage from "./mainpage_components/sixth-page/sixth";
import Footer from "./mainpage_components/footer/footer"; 

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