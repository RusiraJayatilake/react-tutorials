import React, { Component } from 'react'

class Counter extends Component {

    render() { 
        return (
            <div>
                {/* {this.props.children} */}
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className='btn btn-primary btn-sm'
                    >
                    Increament
                </button>
                <span>{this.props.formatValue(this.props.counter.value)}</span>
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)} 
                    className='btn btn-primary btn-sm'
                    >
                    Decreament
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div> 
        );
    }
}
 
export default Counter;