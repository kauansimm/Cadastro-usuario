import React, { useState } from 'react'
import { Funcionario } from '../components/Funcionario'
import "./ConsultarFuncionarioRoute.css"
import { Link } from 'react-router-dom'

export const ConsultarFuncionarioRoute = () => {

  const [query, setQuery] = useState()

  const digitosValidos = (texto) => {
    return texto.replace(/[^a-zA-Z\s]/g, '')
  }

  const controleBuscar = (e) => {
      setQuery(digitosValidos(e.target.value))
  }


  const buscar = (e) => {

    e.preventDefault()

    if(query.trim() == "") return 

    setQuery("")
}


  return (
    <div className="container-consulta-funcionario">
        <div className="header">
          <div className="title">
            <Link className="colorLink" id="back" to={"/"}><span className="material-symbols-outlined" id='back'>arrow_back_ios</span></Link>
            <h3>Consultar funcionários</h3>
          </div>
          <form onSubmit={buscar}>
            <div className="search">
                <span onClick={buscar} className="material-symbols-outlined" id='icon-consultar'>search</span>
                <input type="text" placeholder="Buscar" value={query} onChange={(e) => controleBuscar(e)}/>
            </div>
          </form>
        </div>
        <div className="exibir-funcionarios">
            <Funcionario/>
        </div>
    </div>
  )
}
