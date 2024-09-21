import React from 'react'
import { Link } from 'react-router-dom'
import { CadastroUsuario } from '../components/cadastroUsuario'
import "./Home.css"
import { AlterarUsuario } from '../components/AlterarUsuario'
import { ExcluirFuncionario } from '../components/ExcluirFuncionario'
import { ConsultarFuncionario } from '../components/ConsultarFuncionario'

export const Home = () => {

  return (
    <div className="container">
      <div className="boxFuncionario">
        <CadastroUsuario/>
      </div>
      <div className="boxFuncionario">
        <AlterarUsuario />
      </div>
      <div className="boxFuncionario">
        <ExcluirFuncionario/>
      </div>
      <div className="boxFuncionario">
        <ConsultarFuncionario/>
      </div>
    </div>
  )
}
