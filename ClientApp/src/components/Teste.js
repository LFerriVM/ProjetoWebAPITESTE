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
      <div className="table-responsive">
        <table class="table table-primary">
          <tr>
            <th scope="col">IdTeste</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">CPF</th>
          </tr>
          {data.map(dados =>
            <tr key={dados.idUsuario}>
              <td scope='row'>{dados.idUsuario}</td>
              <td >{dados.nome}</td>
              <td >{dados.email}</td>
              <td >{dados.cpf}</td>
            </tr>)}
        </table>
      </div>

  } else {
    content = <p>Vazio</p>
  }

  <div class="table-responsive">
    <table class="table table-primary">
      <thead>
        <tr>
          <th scope="col">Column 1</th>
          <th scope="col">Column 2</th>
          <th scope="col">Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td scope="row">R1C1</td>
          <td>R1C2</td>
          <td>R1C3</td>
        </tr>
        <tr class="">
          <td scope="row">Item</td>
          <td>Item</td>
          <td>Item</td>
        </tr>
      </tbody>
    </table>
  </div>



  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [date, setDate] = React.useState('');
  return (
    <div>
      {content}
      <hr />
      <h3>Registrar Usuario</h3>
      <label>Nome</label>
      <input className='form-check' type="text" onChange={e => { setNome(e.target.value) }}></input><br />
      <label>Email</label>
      <input className='form-check' type="text" onChange={e => { setEmail(e.target.value) }} ></input><br />
      <label>CPF</label>
      <input className='form-check' type="text" onChange={e => { setCpf(e.target.value) }}></input><br />
      <label>Data de Nascimento</label>
      <input className='form-check' type="date" onChange={e => { setDate(e.target.value) }}></input><br />
      <button onClick={() => popularBanco(nome, email, cpf, date)}>Confimar</button>
    </div>
  )
  function popularBanco(nome, email, cpf, date) {
    let current = new Date();
    current = (`${current.getFullYear() - 18}/${current.getMonth() + 1}/${current.getDate()}}`);
    nome && email && cpf && date ?
      (
        (date > current && (date < (current + 18))) ? (alert("Você deve ser maior de idade")) :
          date < current ? (
            fetch('weatherforecast/banco', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify({
                nome: nome,
                email: email,
                cpf: cpf,
                dataNascimento: date
              })

            }
            ))
            : (alert("Insira uma data válida"))
      ) :
      (alert("Insira todos os dados"))
  }


};
export default Teste;