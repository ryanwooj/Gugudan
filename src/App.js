import React, { Component } from 'react'

class Gugudan extends Component {
  state = {
    first: Math.ceil(Math.random()*9),
    second: Math.ceil(Math.random()*9),
    value: '',
    result: ''
  };
  
  guguActivate = (e) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState({
        result: '정답',
        first: Math.ceil(Math.random()*9),
        second: Math.ceil(Math.random()*9),
        value: '',
      })
    } else {
      this.setState({
        result: '틀렸습니다.',
        value: '',
      })
    }
  }

  render() {
    return (
      <div>
        <div> {this.state.first} 곱하기 {this.state.second} 은? </div>
        <form onSubmit={this.guguActivate}>
          <input 
            type="number"
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})} 
          />
          <button> 입력!</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    )
  }
}


export default Gugudan;
