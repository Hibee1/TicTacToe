import React, {Component} from 'react'
import Squares from './squares'

class Board extends Component {

    state = ({
        squares: ['', '', '', '', '', '', '', '', '']
    })

    handleClick = number => () => {
        const newSquares = [...this.state.squares]
        newSquares[number] = 'X'
        this.setState ({
            squares: newSquares
        })
    }

    render () {
        const {squares} = this.state
        return (
            <div className="Game">
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
            </div>
        )
    }
}

export default Board