import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'

export const CadastroUsuario = () => {
  return (
    <div>
        <div className="cadastrarFuncionario">
          <h3>Cadastrar funcionário</h3>
          <Link to={"/cadastro-funcionario"} className='colorLink'><span className="material-symbols-outlined">group_add</span></Link>
        </div>
    </div>
  )
}
