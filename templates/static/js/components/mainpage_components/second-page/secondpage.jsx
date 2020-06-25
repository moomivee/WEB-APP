import React, { Component } from 'react';
import "./secondpage.css"; 

class Secondpage extends Component{
	render(){
		return(
            <div class="second-p"> 
			<div class="container">

				<div class="responsive"> 
					<div class="gallery">
     					<img src="https://i.ibb.co/LSvNjym/pop.jpg" width="960" height="640"/>
    					<div class="desc"><span class ="tittle">Онлайн обучение</span><br></br><br></br>
    					<span class = "small">Обучение онлайн через 5-10 минутные видеоуроки с домашним заданием</span>
    					</div>
  					</div>
				</div>

				<div class="responsive"> 
					<div class="gallery">
     					<img src="https://i.ibb.co/LSvNjym/pop.jpg" width="960" height="640"/>
    					<div class="desc"><span class ="tittle">Изучайте то, что любите</span><br></br><br></br><span class = "small">Мы постоянно добавляем образовательные программы: иностранные язки, курсы по финансам, музыкальные предметы, киберспорту и другие программы</span>
    					</div>
  					</div>
				</div>

				<div class="responsive"> 
					<div class="gallery">
     					<img src="https://i.ibb.co/LSvNjym/pop.jpg" width="960" height="640"/>
    					<div class="desc"><span class ="tittle">Служба заботы</span><br></br><br></br><span class = "small">24/7 работает техническая и методическая поддержка подписчиков</span></div>
  					</div>
				</div>
                
			</div>
            </div>
			);
	}
}
export default Secondpage;