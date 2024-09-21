import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
import "./CadastroFuncionarioRoute.css"
import { useFetch } from '../hooks/useFetch'

export const CadastroFuncionarioRoute = () => {

    const [nome, setNome] = useState("")
    const [departamento, setDepartamento] = useState("")

    const digitosValidos = (texto) => {
        return texto.replace(/[^a-zA-Z\s]/g, '')
    }

    const controleInputNome = (e) => {
        const digitoValido = digitosValidos(e.target.value)
        setNome(digitoValido)
    }

    const controleInputDepartamento = (e) => {
        const digitoValido = digitosValidos(e.target.value)
        setDepartamento(digitoValido)
    }

    const url = "http://localhost:3000/funcionarios"

    const {dados : info, httpsConfig, loading, error} = useFetch(url)

    const enviarDados = async (e) => {
        e.preventDefault()

        if(nome.trim() == "" || departamento.trim() == "") return 

        const funcionario = {
            nome, departamento
        }

        httpsConfig(funcionario, "POST")

        setNome("")
        setDepartamento("")
    }

  return (
    <div>
        <div className="container-cadastro">
            <Link className="colorLink" to={"/"}><span className="material-symbols-outlined">arrow_back_ios</span></Link>
            <form onSubmit={enviarDados}>
                <div className="controle-inputs">
                    <label>
                        <span>Nome:</span>
                        <input type="text" placeholder='Informe o nome do funcionário' value={nome} onChange={(e) => controleInputNome(e)}/>
                    </label>
                </div>
                <div className="controle-inputs">
                    <label>
                        <span>Departamento:</span>
                        <input type="text" placeholder='Informe o nome do departamento' value={departamento} onChange={(e) => controleInputDepartamento(e)}/>
                    </label>
                </div>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    </div>
  )
}
