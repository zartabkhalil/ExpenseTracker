import React from 'react';
import {Context} from './CommonContext';
function Balance() {
    return (
        <Context.Consumer>
        {
        (value)=>(
            
         <div className='row'> 
            <h5 className="text-capitalize">Your Balance</h5>
            <h3 className="font-weight-bold">${value[0].balance}</h3>
        </div>
        )
    }
    </Context.Consumer> 
    );
}

export default Balance;