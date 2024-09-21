import React from 'react'
import "./Funcionario.css"
import { useFetch } from '../hooks/useFetch'

export const Funcionario = ({id}) => {

    const url = "http://localhost:3000/funcionarios"
    const { dados: info, httpsConfig, loading, error} = useFetch(url)

  return (
    <div className="container-funcionario">
        {info && 
        info.map((funcionario) => (
            <div className="dados-funcionario" key={funcionario.id}>
                <h4>Id: <span>{funcionario.id}</span></h4>
                <h4>Nome: <span>{funcionario.nome}</span></h4>
                <h4>Departamento: <span>{funcionario.departamento}</span></h4>
            </div>
        ))}
    </div>
  )
}
