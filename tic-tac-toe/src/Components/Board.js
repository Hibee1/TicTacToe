import React, {Component} from 'react'
import Squares from './squares'

const calculateWinner = (squares) => {
    const lines = [
        //horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        //vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        //diagonal
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        //get current line row
        const [a, b, c] = lines[i]

        //keeps check if we have X or O in position a
        if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
            return squares[a]
        }
        //i = 0
        //lines[0] = 0, 1, 2
        // a = 0, b = 1, c = 2
        //if an element inside squares[0] exisis
        // and if it's equal to squares[1]
        // and if it's equal to squares[2]
        // return that element (X or O)

        //i = 1
        //lines[1] = 3, 4, 5
        // a = 3, b = 4, c = 5
        //if an element inside squares[3] exisis
        // and if it's equal to squares[4]
        // and if it's equal to squares[5]
        // return that element (X or O)
    }
    // if there's no such element - return an empty string
    return ''
}

class Board extends Component {

    state = ({
        squares: ['', '', '', '', '', '', '', '', ''],
        isNext: true
    })

    handleReset = () => {
        this.setState({
            squares: ['', '', '', '', '', '', '', '', ''],
            isNext: true
        })
    }


    handleClick = number => () => {
        if (calculateWinner(this.state.squares) || this.state.squares[number]) {
            // there's already an X or O here
            return
        }

        const newSquares = [...this.state.squares]
        newSquares[number] = this.state.isNext ? 'X' : 'O'
        this.setState ({
            squares: newSquares,
            isNext: !this.state.isNext
        })
    }

    render () {
        const {squares, isNext} = this.state
        const winner = calculateWinner(this.state.squares)
        let status

        if (winner) {
            status = `Winner: ${winner}`
        }
        else {
            status = `Next player: ${isNext ? 'X' : 'O'}`
        }
        return (
            <div className="Game">
                <h1 className="Declarer">{status}</h1>
                <div className= "parent">
                    <div className="row">
                        <Squares onClick= {this.handleClick(0)} value= {squares[0]} />
                        <Squares onClick= {this.handleClick(1)} value= {squares[1]} />
                        <Squares onClick= {this.handleClick(2)} value= {squares[2]} />
                    </div>
                    <div className="row">
                        <Squares onClick= {this.handleClick(3)} value= {squares[3]} />
                        <Squares onClick= {this.handleClick(4)} value= {squares[4]} />
                        <Squares onClick= {this.handleClick(5)} value= {squares[5]} />
                    </div>
                    <div className="row">
                        <Squares onClick= {this.handleClick(6)} value= {squares[6]} />
                        <Squares onClick= {this.handleClick(7)} value= {squares[7]} />
                        <Squares onClick= {this.handleClick(8)} value= {squares[8]} />
                    </div>
                </div>
                <button className= "Button" onClick= {this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Board