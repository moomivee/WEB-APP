import React, { Component } from 'react';
import "./fifthpage.css";


class Container extends Component{
	render(){
		return(
        

            <div className = "box">
                <img className ="box-image" src="https://i.ibb.co/LSvNjym/pop.jpg" />
                
                <div className = "part-box">
                    <h3>Математика <br></br> Подготовка к ЕГЭ</h3>
                    <p>Разъясняющий подзаголовок, частино описывающий суть курса.</p>
                </div>

            </div>
        
        );
	}
};

class Section1 extends Component{
	render(){
		return(
        <div className ="sec1">
            <Container/>
            <Container/>
            <Container/>
            <Container/>
        </div>
        );
	}
};


class Section2 extends Component{
	render(){
		return(
        <div className ="sec2">
            <Container/>
            <Container/>
            <Container/>
            <Container/>
        </div>
        );
	}
};

class Footer extends Component{
    render(){
        return(
            <div className ="footer-five">
                <div className ="buttfive"><a href="#" class="buttom4">Все предметы</a></div>
            </div>
        );
    }
};

class Section extends Component{
	render(){
		return(
        <div className ="fifthpage">
            <div className = "pagefive">
                <Section1/>
                <Section2/>
            </div> 
        </div>
        );
	}
};

class Fifthpage extends Component{
	render(){
		return(
            <div className = "full">
                <Section/>
                <Footer/>
            </div> 
        );
	}
}
export default Fifthpage;