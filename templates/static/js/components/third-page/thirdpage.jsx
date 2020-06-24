import React, { Component } from 'react';
import "./thirdpage.css"; 

class MainColumn extends Component{

	render(){
		return(
	<section class="column main-column">
    <a class="article first-article" href="#">
      <figure class="article-image is-4by3">
        <img src="https://i.ibb.co/LSvNjym/pop.jpg" alt=""/>
      </figure>
      <div class="article-body">
        <h2 class="article-title">
          Заголовок о каком-то эпохальном событии, имеющем значение для всего человечества
        </h2>
        <p class="article-content">
          Описание, позволяющее читателю моментально осознать всю эпическую мощь произошедшего и дающее ему
		  возможность прочитать самые важные моменты прямо здесь, в этом тексте, без необходимости куда-то кликать 
		  и переходить. Не знаю, насколько целесообразно использование таких гигантских плашек, но зато сверху можно 
		  разместить сразу несколько фотографий вместо одной, а этот текст не обязан быть таким длиннымю
        </p>
        <footer class="article-info">
          <span>31.06.2019</span>
        </footer>
      </div>
    </a>

    <div class="columns">
      <div class="column nested-column">
        <a class="article" href="#">
          <figure class="article-image is-16by9">
            <img src="https://i.ibb.co/LSvNjym/pop.jpg" alt=""/>
          </figure>
          <div class="article-body">
            <h2 class="article-title">
              Заголовок о важном событии
            </h2>
            <p class="article-content">
			 Многа текста, чтобы сразу все узнать.Но я не знаю, что написать тут, поэтому пишу просто глупые предложения. 
			 Фантазии нет, поэтому я стараюсь выкрутиться как могу. Но двух предложений все же недостаточно, поэтому
			 я стараюсь как-то выбить все же еще слов, заполняя текст банальными никому не нужными словами. Но даже тут текста
			 мало, а сил уже нет.
            </p>
            <footer class="article-info">
              <span>10.04.2020</span>
            </footer>
          </div>
        </a>
      </div>

      <div class="column">
        <a class="article" href="#">
          <figure class="article-image is-16by9">
            <img src="https://i.ibb.co/LSvNjym/pop.jpg" alt=""/>
          </figure>
          <div class="article-body">
            <h2 class="article-title">
              Заголовок новости
            </h2>
            <p class="article-content">
              Какой-то текст не особо важный.
            </p>
            <footer class="article-info">
              <span>16.08.2020</span>
            </footer>
          </div>
        </a>

        <a class="article" href="#">
          <div class="article-body">
            <h2 class="article-title">
				Заголовок старой новости
            </h2>
            <p class="article-content">
				Коротко о чем.
            </p>
            <footer class="article-info">
              <span>12.10.2019</span>
            </footer>
          </div>
        </a>

        <a class="article" href="#">
          <div class="article-body">
            <h2 class="article-title">
              Заголовок старой новости
            </h2>
            <p class="article-content">
              Коротко о чем.
            </p>
            <footer class="article-info">
              <span>25.05.2019</span>
            </footer>
          </div>
        </a>
      </div>
    </div>
  </section>
		);

	}
}

class Column extends Component{
	render(){
		return(
			<section class="column">
    <a class="article" href="#">
      <figure class="article-image is-3by2">
        <img src="https://i.ibb.co/LSvNjym/pop.jpg" alt=""/>
      </figure>
      <div class="article-body">
        <h2 class="article-title">
		Заголовок о каком-то менее эпохальном событии, но тоже ниче так
        </h2>
        <p class="article-content">
          Какой-то текст для краткой выжимки. У меня плохо с воображением, поэтому остановимся на двух предложениях.
        </p>
        <footer class="article-info">
          <span>12.09.2020</span>
        </footer>
      </div>
    </a>
    <a class="article" href="#">
      <div class="article-body">
        <h2 class="article-title">
          Заголовок тоже об актуальном
        </h2>
        <p class="article-content">
          Что-то про актуальное, что-то не такое большое, но без фотки.
        </p>
        <footer class="article-info">
          <span>8.06.2020</span>
        </footer>
      </div>
    </a>
    <a class="article" href="#">
      <div class="article-body">
        <h2 class="article-title">
			Заголовок тоже об актуальном
        </h2>
        <p class="article-content">
		Что-то про актуальное, что-то не такое большое, но без фотки.
        </p>
        <footer class="article-info">
          <span>11.11.2019</span>
        </footer>
      </div>
    </a>
    <a class="article" href="#">
      <div class="article-body">
        <h2 class="article-title">
		Заголовок тоже об актуальном
        </h2>
        <p class="article-content">
		Что-то про актуальное, что-то не такое большое, но без фотки.
        </p>
        <footer class="article-info">
          <span>18.05.2019</span>
        </footer>
      </div>
    </a>
  </section>
		);
	}
}


class Hide extends Component{
  render(){
    return(
      <div class = "show-more">
        <div className ="butt">
          <a href="#" class="buttom3">Читать все новости</a>
          </div>
      </div>
    );
  }
}; 

class Main extends Component{
	render(){
    return(<main className = "main columns">
            <MainColumn/><Column/></main>
      );
	}
};


class Thirdpage extends Component{
	render(){
    return(<div className = "all"><Main/><Hide/></div>
      );
	}
};
export default Thirdpage;