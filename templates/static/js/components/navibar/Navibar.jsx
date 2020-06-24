import React, { Component } from 'react';
import "./navibar.css"; 

class Navibar extends Component{
	render(){
		return(
			<div class="navigation-bar">
  				<div class="bar-right">
  					<a href="#benefits">Преимущества</a>
  					<a href="#about">О компании</a>
  					<a href="#contact">Контакты</a>
  					<span class ="entrence"><a href="#enter">Вход</a></span>
  				</div>
			</div>
			);
	}
}
export default Navibar;