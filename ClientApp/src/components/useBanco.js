import React from "react";

const useBanco = () => {
    const [idteste, setidteste] = React.useState(''); 
    const [nome, setnome] = React.useState('');
    
  
    const resquest = React.useCallback(async ()=>{
      const req = await fetch("weaterforecast/banco", {
        method: 'POST',
        headers:{ 'Content-type':'aplication/json' },
        body: {idteste, nome}
      }).then(response=>response.json())
  
    })
    return[]
  }
  export default useBanco;