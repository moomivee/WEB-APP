import React from 'react';
import "./forthpage.css";

class Photos extends React.Component{
	render(){
		return(<div className = "pic">
                <div className = "grid">
                    <img class="grid-item div1" src="https://i.ibb.co/LSvNjym/pop.jpg" /> 
                    <img class="grid-item div2" src="https://i.ibb.co/LSvNjym/pop.jpg" />
                    <img class="grid-item div3" src="https://i.ibb.co/LSvNjym/pop.jpg" /> 
                    <img class="grid-item div4" src="https://i.ibb.co/LSvNjym/pop.jpg" />
                </div>
            </div>);
	}
};

class Describtion extends React.Component{
	render(){
		return(<div className = "discrib">
                <p>Ой, тут что-то нужно написать, но у меня как обычно нет идей. 
                    А еще я очень долго ставила 4 картинки в сеточку, поэтому теперь я просто на полной дизморали, эти ячейки высосали из меня всё.
                    Ля ля ля тополя, нужен текст, нужен текст, я что-то пишу. Пишу и все, и вот. 
                    А сегодня в завтрашний день не все могу смотреть, вернее смотреть могут не только лишь все, мало кто может это делать.</p>

            </div>);
	}
};

class Fourthpage extends React.Component{
	render(){
		return(
        <div className ="fourth">
            <div className = "title"> Заголовок о том, что у нас все здорово</div> 
            <div className = "page"><Photos/><Describtion/></div>
        </div>
        );
	}
}
export default Fourthpage;