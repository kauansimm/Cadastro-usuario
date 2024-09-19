import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
import "./CadastroFuncionarioRoute.css"

export const CadastroFuncionarioRoute = () => {
  return (
    <div>
        <div className="container-cadastro">
            <Link className="colorLink" to={"/"}><span className="material-symbols-outlined">arrow_back_ios</span></Link>
            <form>
                <div className="controle-inputs">
                    <label>
                        <span>Nome:</span>
                        <input type="text" placeholder='Informe o nome do funcionário'/>
                    </label>
                </div>
                <div className="controle-inputs">
                    <label>
                        <span>Departamento:</span>
                        <input type="text" placeholder='Informe o nome do departamento'/>
                    </label>
                </div>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    </div>
  )
}
