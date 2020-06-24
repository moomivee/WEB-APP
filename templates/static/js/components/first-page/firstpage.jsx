import React from 'react';
import "./firstpage.css"; 
import Dashboard from "./buttom-for-email";


class Firstpage extends React.Component{
	render(){
		return(
			<div className = "content">
			<div class="first-p"> 
			<img class="privet" src="asestart1.jpg"/>

            <div className = "center">

			    <img class="image" src='asestart.jpg'/>

 			    <div className = "text">
					<p>Прямо сейчас мы разрабатываем замечательную платформу для дополнительного образования и подготовки к ЕГЭ.<br></br>
					<br></br>
					А пока оставь нам свою почту, чтобы первым узнать, когда можно приступать к обучению.</p>
					<br></br>
					<p><Dashboard></Dashboard></p>
					<p><span class = "small-text">Отправляя форму, вы соглашаетесь на обработку персональных данных, 
					защищенных политикой кофиденциальности и обрабатываемых для выполнения вашей заявки.</span></p>
					</div>
				 </div>

            </div>
			</div>
			);
	}
}
export default Firstpage;

