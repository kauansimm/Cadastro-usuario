import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import "./AlterarFuncionarioRoute.css"

export const AlterarFuncionarioRoute = () => {

    const [departamento, setDepartamento] = useState("")
    const [nome, setNome] = useState("")
    const [id, setId] = useState("")

    const digitosValidos = (texto) => {
        return texto.replace(/[^a-zA-Z ]/g, '')
      }

    const controleInputNome = (e) => {
        const digitoValido = digitosValidos(e.target.value)
        setNome(digitoValido)
    }

    const controleInputDepartamento = (e) => {
        const digitoValido = digitosValidos(e.target.value)
        setDepartamento(digitoValido)
    }

    const [isFuncionario, setIsFuncionario] = useState(false)

    const controleInputId = (e) => {
        setIsFuncionario(false)
        setIsDisabled(true)
        setId(e.target.value)
    }

    const url = "http://localhost:3000/funcionarios"

    const { dados: info, httpsConfig, loading, error} = useFetch(url, id)

    useEffect(() => {
        const validId = async () => {
            info && info.map((idFunc) => {
                if (idFunc.id == id) {
                    return setIsFuncionario(true), setIsDisabled(false)
                }
            })
        }
        validId()
    }, [id])

    const [isDisabled, setIsDisabled] = useState(true)

    const enviarDados = (e) => {
        e.preventDefault()

        if(nome.trim() == "" || departamento.trim() == "") return 

        info.map((func) => {

            if (func.id == id) {
                
                const funcionario = {
                    nome, departamento
                }
        
                httpsConfig(funcionario, "PUT")
                setNome("")
                setDepartamento("")
            }
        })

    }

  return (
    <div>
        <div className="container-Alterar">
            <Link className="colorLink" to={"/"}><span className="material-symbols-outlined">arrow_back_ios</span></Link>
            <form onSubmit={enviarDados}>
                <div className="controle-inputs">
                    <label>
                        <span>Id: </span>
                        <input type="text" placeholder='Informe o id do funcionário' value={id} onChange={(e) => controleInputId(e)}/>
                    </label>
                    {isFuncionario ? (<p id='usuario-encontrado'>*Usuario encontrado</p>) : (<p id='usuario-nao-encontrado'>*Usuário não encontrado</p>)}
                </div>
                <div className="controle-inputs">
                    <label>
                        <span>Alterar nome:</span>
                        <input type="text" disabled={isDisabled} placeholder='Informe o nome do funcionário' value={nome} onChange={(e) => controleInputNome(e)}/>
                    </label>
                </div>
                <div className="controle-inputs">
                    <label>
                        <span>Alterar departamento:</span>
                        <input type="text" disabled={isDisabled} placeholder='Informe o nome do departamento' value={departamento} onChange={(e) => controleInputDepartamento(e)}/>
                    </label>
                </div>
                <input id='btn-alterar' type="submit" value="Alterar"/>
            </form>
        </div>
    </div>
  )
}
