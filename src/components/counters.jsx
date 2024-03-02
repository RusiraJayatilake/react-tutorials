import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement, formatValue} = this.props; 
        return (
            <div>
                <h1>Counters</h1>
                <button onClick={onReset} className='btn btn-warning btn-sm m-2'>Reset</button>
                { counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete} 
                        counter={counter}
                        onIncrement={onIncrement} 
                        onDecrement={onDecrement} 
                        formatValue={formatValue} 
                    />) 
                }
            </div>
        );
    }
}
 
export default Counters;