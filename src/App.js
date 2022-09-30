import React, { Component } from 'react'
import './App.css'
import ProductData from './components/ProductData';
import {Link, BrowserRouter as Router} from 'react-router-dom'
import logo from './images-removebg-preview.png'

export class App extends Component {

  state = {
    border0: true,
    border1: false,
    border2: false,
    border3: false,
    time: true,
    heart: false,
    updated_time: new Date()
  }

  bor0 = () => {
    const now = !this.state.border
    this.setState({border0: now, border1: false, border2: false, border3:false})
    
  }

  bor1 = () => {
    const now = !this.state.border
    this.setState({border1: now, border0: false, border2: false, border3:false})
  }

  bor2 = () => {
    const now = !this.state.border
    this.setState({border2: now, border1: false, border0: false, border3:false})
  }

  bor3 = () => {
    const now = !this.state.border
    this.setState({border3: now, border1: false, border2: false, border0:false})
  }

  img_bordered = 2

  time = this.state.updated_time

  timebtn = () => {
    if (this.state.time){
      return 
    }
    const now = !this.state.time
    this.setState({updated_time: new Date()})
    this.setState({time: now, heart:false})
  }

  heartbtn = () =>{
    if(this.state.heart){
      return 
    }
    const now = !this.state.heart
    this.setState({heart: now, time:false})
  }
  

  render() {
    if(this.state.border1 === true && this.state.border2 === false && this.state.border0 === false && this.state.border3 === false){
      this.img_bordered = 1
    }
    else if (this.state.border0 === true && this.state.border1 === false && this.state.border2 === false && this.state.border3 === false){
      this.img_bordered = 0
    }
    else if (this.state.border2 === true && this.state.border1 === false && this.state.border0 === false && this.state.border3 === false){
      this.img_bordered = 2
    }
    else if (this.state.border3 === true && this.state.border1 === false && this.state.border0 === false && this.state.border2 === false){
      this.img_bordered = 3
    }
    

    return (
      <div>
        <nav>
          <img src={logo} alt=""/>
        </nav>

        <body className="body">
          <Router>
          <h2>{ProductData.title}</h2>
          <h5>{ProductData.description}</h5>
          <h4 className="select">Select Color</h4>
          <img className="img" src={ProductData.colorOptions[this.img_bordered].imageUrl} alt=""/>
          <Link to="/"><img src={ProductData.colorOptions[0].imageUrl} alt="" className={this.state.border0? "color-border options" : "options"} onClick={this.bor0}/></Link>
          <Link to="/"><img src={ProductData.colorOptions[1].imageUrl} alt="" className={this.state.border1? "color-border options" : "options"} onClick={this.bor1}/></Link>
          <Link to="/"><img src={ProductData.colorOptions[2].imageUrl} alt="" className={this.state.border2? "color-border options" : "options"} onClick={this.bor2}/></Link>
          <Link to="/"><img src={ProductData.colorOptions[3].imageUrl} alt="" className={this.state.border3? "color-border options" : "options"} onClick={this.bor3}/></Link>
          {this.state.time? <h3>{this.time.getHours()>9? this.time.getHours(): `0${this.time.getHours()}`}:{this.time.getMinutes() > 9? this.time.getMinutes() : `0${this.time.getMinutes()}`}</h3> : <h3 className="heart">78</h3>}
          <h4 className="features">Features</h4>
          <button onClick={this.timebtn} className={this.state.time? "chosen-button" : ""}><p>{ProductData.featureList[0]}</p></button>
          <button onClick={this.heartbtn} className={this.state.heart? "chosen-button" : ""}><p>{ProductData.featureList[1]}</p></button>
          {this.state.heart? <img className="heart-gif" src="https://media1.giphy.com/media/elbK2MEFZTzzYzqyzi/giphy.gif?cid=ecf05e47tj5xpncs9fchhj6plgs46kxzycpgkl0kbaaf5y7i&rid=giphy.gif&ct=g" alt=""/>:""}
          <br/>
          <button className="buy"><strong>Buy Now</strong></button>
          </Router>       
        </body>
      </div>
    )
  }
}

export default App;

