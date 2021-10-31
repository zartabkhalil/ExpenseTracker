import React from 'react';
import { useContext } from 'react';
import {Context} from './CommonContext';
function History() {
    
const [sheet] = useContext(Context)

   return(
   
<div className="row mt-3">
    <h4>History</h4>
        <div className="row ">
            <div className="card">
                <div className="card-body">
                        {sheet.history.map((value,index)=>{
                            
                            return(
                            <div className="row mt-2" key={index}>
                                    <div className="col-6">{value.type}</div>
                                    <div className="col-3 d-flex justify-content-end">{value.price}</div>
                                    {value.price > 0 ? 
                                    <div className="col-1 d-flex justify-content-end bg-success"></div>
                                    
                                    :
                                    <div className="col-1 d-flex justify-content-end bg-danger"></div>
                                    
                                    }
                                </div>
                                
                                ) 
    
                        })}
                    
                       
                    
                </div>
            </div>
        </div>
</div>
        
   
   
   )
}

export default History;