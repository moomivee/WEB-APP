import React, { Component } from "react";
import Modal from './run-the-button';
import "./button-for-email.css";

state = { show: false };

showModal = () => {
    this.setState({ show: true });
  };

hideModal = () => {
  this.setState({ show: false })
};

class Dashboard extends Component {
  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}></Modal>
        <button ClassName = "page-button" type="button" onClick={this.showModal}> Оставить почту
        </button>
      </main>
    );
  }
}
export default Dashboard;
