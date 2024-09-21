
import { Funcionario } from '../components/Funcionario'
import "./ConsultarFuncionarioRoute.css"
import { Link } from 'react-router-dom'

export const ConsultarFuncionarioRoute = () => {

  return (
    <div className="container-consulta-funcionario">
        <div className="header">
          <div className="title">
            <Link className="colorLink" id="back" to={"/"}><span className="material-symbols-outlined" id='back'>arrow_back_ios</span></Link>
            <h3>Consultar funcionários</h3>
          </div>
        </div>
        <div className="exibir-funcionarios" >
            <Funcionario />
        </div>
    </div>
  )
}
