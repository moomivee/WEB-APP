import React, { Component } from 'react';
import "./sixth.css";


class Right extends Component{
    render(){
        return(
            <div className = "right_side">

                <h2>Занимайтесь любимыми предметами по единой подписке 449 руб./мес.</h2>

                <p>Иностранные языки, подготовка к экзаменам(ЕГЭ и др.), курсы по финансам, спорт и здоровье и др.</p>
                
                <a href="#" class="buttom"> Бесплатный пробный период</a>
            </div>
        );
    }
};

class Left extends Component{
    render(){
        return(
            <div className = "left_side">
            
            <div className ="bor"><a href="#" class="buttom2">Построй карьерный Road Map</a></div>
            <ol className = "describ"> <br></br> <li>+7(495) 005-48-16 </li><br></br> <li>Пн-Пт: 09:00-21:00 <br></br> Сб-Вс: 11:00-19:00 </li> <br></br><li>Рублево-Успенское шоссе, Жуковка, 68 </li><br></br> <li>Станция метро Крылатское</li></ol> 
            <Line/>
            </div>
        );
    }
};

class Line extends Component{
    render(){
        return(
            <div className = "line">
                <img  src="https://i.ibb.co/LSvNjym/pop.jpg" /> 
                <img  src="https://i.ibb.co/LSvNjym/pop.jpg" />
                <img  src="https://i.ibb.co/LSvNjym/pop.jpg" />
            </div>

        );
    }
};

class Sixthpage extends Component{
	render(){
		return(
        <div className ="pagesix">
            <div className = "main_content"><Right/><Left/>
            </div> 
        </div>
        );
	}
}
export default Sixthpage;