
import React,{useState} from 'react';

const Context=React.createContext({});


function CommonContext({children}) {
    const [sheet, setsheet] = useState({
        balance:0,
        expense:0,
        income:0,
        history:[],
        
    });
    
    return (
        <Context.Provider value={[sheet,setsheet]} >
        {children}
         </Context.Provider>     
    );
    
}



export default CommonContext;

export  {Context};