import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

export const ExcluirFuncionario = () => {
  return (
    <div>
        <div className="excluirFuncionario">
          <h3>Excluir funcionário</h3>
          <Link to={"/excluir-funcionario"} className='colorLink'><span className="material-symbols-outlined">delete</span></Link>
        </div>
    </div>
  )
}
