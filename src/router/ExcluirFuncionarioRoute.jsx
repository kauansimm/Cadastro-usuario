import React, { useState, useEffect } from 'react'
import "./ExcluirFuncionarioRoute.css"
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export const ExcluirFuncionarioRoute = () => {

    const url = "http://localhost:3000/funcionarios"
    const [id, setId] = useState("")
    const [isFuncionario, setIsFuncionario] = useState(false)
    const [departamento, setDepartamento] = useState("")
    const [nome, setNome] = useState("")

    const controleInputExcluir = (e) => {
        setIsFuncionario(false)
        setId(e.target.value)
    };

    const { dados: info, httpsConfig, loading, error } = useFetch(url, id)

    useEffect(() => {

        const validId = () => {

            if (info) {
                const funcionario = info.some(idFunc => idFunc.id == id)
                setIsFuncionario(funcionario)
            }
        };

        validId()
    }, [id, info])

    const excluirFuncionario = async (e) => {

        e.preventDefault()

        if (isFuncionario) {

            const funcionario = {
                nome, departamento
            }

            try {
                await httpsConfig(funcionario, "DELETE")
                setId("")

            } catch (err) {
                console.log(err)
            }
        }
    }

  return (
    <div className="container-excluir">
            <Link className="colorLink" to={"/"}><span className="material-symbols-outlined">arrow_back_ios</span></Link>
            <form onSubmit={excluirFuncionario}>
                <div className="controle-inputs">
                    <label>
                        <span>Id:</span>
                        <input type="text" value={id} placeholder='Informe o nome do funcionário' onChange={(e) => controleInputExcluir(e)}/>
                    </label>
                    {isFuncionario ? (<p id='usuario-encontrado'>*Usuario encontrado</p>) : (<p id='usuario-nao-encontrado'>*Usuário não encontrado</p>)}
                </div>
                <input id="btn-excluir" type="submit" value="Excluir"/>
            </form>
        </div>
  )
}
