import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: ['', '', '', '', '', '', '', '', ''],
      player: 'X'
    }
  }

  squareClicked(index){
    let player = this.state.player;
    let board = this.state.board;

    board[index] = player;
    let winning_combos =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for (let i=0; i<winning_combos.length;i++){
      let winning_row = winning_combos[i]
      let p1= winning_row[0];
      let p2= winning_row[1];
      let p3= winning_row[2];

      if (board[p1] == board[p2] && board[p2] == board[p3] && board[p3] == board[p1]){
        alert(`Player ${player} has won the game`);
      }
    }
    console.log(board);

    player = (player == 'X')? 'O' : 'X';

    this.setState({
      player: player,
      board: board
    })

    console.log(index);
  }
  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div className='board'>
          {this.state.board.map((square, index) => {
            return <div className='square' key = {index} onClick={()=> this.squareClicked(index)}>{square}</div>
          })}
        </div>
      </div>
    );
  }
}


export default App;
