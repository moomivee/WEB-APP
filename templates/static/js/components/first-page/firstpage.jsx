import React from 'react';
import "./firstpage.css"; 
import Dashboard from "./buttom-for-email";


class Firstpage extends React.Component{
	render(){
		return(
			<div className = "content">
			<div class="first-p"> 
			<img class="privet" src="https://i.ibb.co/5LVpD25/asestart1.jpg"/>

            <div className = "center">

			    <img class="image" src="https://i.ibb.co/bz72TtC/ASE-MAINPAGE.jpg"/>

 			    <div className = "text">
					<p>Прямо сейчас мы разрабатываем замечательную платформу для дополнительного образования и подготовки к ЕГЭ.<br></br>
					<br></br>
					А пока оставь нам свою почту, чтобы первым узнать, когда можно приступать к обучению.</p>
					<br></br>
						<Dashboard></Dashboard>	
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

