import React, { Component } from "react";
import Modal from './run-the-button';
import "./button-for-email.css";

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ isModalOpen: true})
  }
  
  closeModal () {
    this.setState({ isModalOpen: false })
  }


  render() {
    return (
      <div>
        <button ClassName = "page-button" type="button" onClick={this.openModal}>Оставить почту</button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}/>
      </div>
    );
  }
}
export default Dashboard;
