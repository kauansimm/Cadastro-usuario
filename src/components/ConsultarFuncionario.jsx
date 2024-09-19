import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'

export const ConsultarFuncionario = () => {
  return (
    <div>
        <div className="consultarFuncionario">
          <h3>Consultar funcionários</h3>
          <Link to={"/consultar-funcionarios"} className='colorLink'><span className="material-symbols-outlined">search</span></Link>
        </div>
    </div>
  )
}
