import React, { useEffect } from 'react';

const Teste = () => {
  // let state = { forecasts: [], loading: true };
  const [data, setData] = React.useState('');
  React.useEffect(() => {
    async function populateWeatherData() {
      const response = await fetch('weatherforecast/banco');
      const res = await response.json();
      setData(res)
      console.log(data)
    }

    populateWeatherData()


  }, [])
  let content
  if (data) {
    content =
      <table>
        <tr>
          <th>IdTeste</th>
          <th>Nome</th>
        </tr>
        {data.map(dados =>
          <tr key={dados.idteste}>
            <td>{dados.idteste}</td>
            <td>{dados.nome}</td>
          </tr>)}
      </table>

  } else {
    content = <p>Vazio</p>
  }



  const [nome, setnome] = React.useState('');
  return (
    <div>
      {content}
      <hr />
      <h3>Registrar Usuario</h3>
      <input type="text" onChange={e=>{setnome(e.target.value)}} name='testeNome' ></input>
      <input {...nome}></input>
      <button onClick={() => popularBanco(nome)}></button>
    </div>
  )
  function popularBanco(nome) {
    return fetch('weatherforecast/banco', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        Nome: nome
      })
    });
  }


};
export default Teste;