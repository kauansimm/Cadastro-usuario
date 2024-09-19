import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'

export const AlterarUsuario = () => {
  return (
    <div>
        <div className="alterarFuncionario">
          <h3>Alterar funcionário</h3>
          <Link to={"/alterar-funcionario"} className="colorLink"><span className="material-symbols-outlined">cycle</span></Link>
        </div>
    </div>
  )
}
