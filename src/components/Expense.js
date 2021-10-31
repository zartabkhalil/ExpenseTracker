import React from 'react';
import { useContext } from 'react';
import {Context} from './CommonContext';
function Expense() {

const [sheet,income] = useContext(Context)
    return (
        <div className="row mt-3">
            <div className="card text-center p-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <h4 className="font-weight-bold">INCOME</h4>
                            <p className="text-info">${sheet.income}</p>
                        </div>
                        <div className="col-6">
                            <h4 className="font-weight-bold">EXPENSE</h4>
                            <p className="text-warning font-weight-bold">${sheet.expense}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Expense;