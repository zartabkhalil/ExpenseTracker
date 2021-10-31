import React from 'react'
import { useState } from 'react'
import {Context} from './CommonContext';
import { useContext } from 'react';

export default function Transaction() {
    const [tname, settname] = useState("");
    const [amount, setamount] = useState(0)
    
    const [sheet,setsheet] = useContext(Context)
    
       
    const addTrans=()=>{
        
        if(tname){
        console.log("running")
            let expense=sheet.expense
            let income=sheet.income
            let history=sheet.history
            
            amount>=0 ? income= parseInt(amount) + parseInt(income) : expense= parseInt(expense)+parseInt(amount)
            console.log(income)
            history=[...sheet.history,{type:tname,price:amount}];
            
            setsheet({
                balance:income + expense,
                expense:expense,
                income:income,
                history:history,
                
              })
        
        }
    }
    
    
    return (
        <div className="row mt-3">
            <h4 className="p-1 border-bottom" >Add new  Transaction</h4>
            <h5 className="mt-2">Text</h5>
            <input type="text" className="form-control form-control-lg" value={tname} onChange={event=>settname(event.target.value)} placeholder="Enter Text" />
            
            <p className="mt-3"><span className="h5">Amount</span> <br/>(Negative -Expense Positive-income</p>
            <input type="number" name="" id="" value={amount} onChange={event=>setamount(event.target.value)}  className="form-control form-control-lg" />
            
            <button className="btn btn-lg mt-3 btn-primary text-white" onClick={addTrans}>Add New</button>
        </div>
    )
}
