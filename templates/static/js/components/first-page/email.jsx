import React from "react";
import "./button-for-email.css";

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email:''
      };
  
      this.handleChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
      console.log('Change detected. State updated' + name + ' = ' + value);
    }
  
    handleSubmit(event) {
      alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label for="nameImput">Ваше Имя</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Name" />
            </div>
            <div className="form-group">
              <label for="emailImput">Почта</label>
              <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailImput" placeholder="email@domain.com" />
            </div>
            <div className = "subbut">
            <input type="submit" value="Отправить" className="btn btn-primary" />
            </div>
          </form>
        </div>
      )
    }
  }
  
  class MainTitle extends React.Component {
    render(){
      return(
        <h1>Оставьте нам свою почту,<br></br> 
            чтобы мы могли с Вами связаться!</h1>
      )
    }
  }
  
  class Email extends React.Component {
    render(){
      return(
        <div>
          <MainTitle/>
          <ContactForm/>
        </div>
      )
    }
  }
  
  export default Email;