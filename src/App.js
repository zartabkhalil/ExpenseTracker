import './App.css';
import Header  from './components/Header';
import Balance from './components/Balance';
import Expense from './components/Expense';
import History from './components/History';
import Transaction from './components/Transaction';

import { useState } from 'react';
import {Context} from './components/CommonContext';
import CommonContext from './components/CommonContext';
function App() {
  
  
  
  
  
 
  return (
    <div className="container mt-5 p-5">
          <div className="row">
              <div className="col-6 mx-auto ">
              <CommonContext>
                  <Header ></Header>
                  <Balance ></Balance>
                  <Expense ></Expense>
                  <History ></History>
                  <Transaction />
                
              </CommonContext>
              
              </div>
          </div>
      </div>
  );
}

export default App;
