import React, { Component, useState, useEffect } from 'react'; 

export default class Mywidth extends React.Component {
    constructor() {
      super();
  
      this.state = {
        height: 0,
        width: 0
      };
  
      window.addEventListener("resize", this.update);
    }
  
    componentDidMount() {
      this.update();
    }
  
    update = () => {
      this.setState({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };
  
    render() {
      return (
        <React.Fragment>
         
         <p wid={this.state.width}></p>
        </React.Fragment>
      );
    }
  }