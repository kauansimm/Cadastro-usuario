import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Home } from './router/Home.jsx'
import { CadastroFuncionarioRoute } from './router/CadastroFuncionarioRoute.jsx'
import { AlterarUsuario } from './components/AlterarUsuario.jsx'
import { ExcluirFuncionario } from './components/ExcluirFuncionario.jsx'
import { ConsultarFuncionario } from './components/ConsultarFuncionario.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }, 
      {
        path: "cadastro-funcionario", 
        element: <CadastroFuncionarioRoute/>
      },
      {
        path: "alterar-funcionario", 
        element: <AlterarUsuario/>
      },
      {
        path: "excluir-funcionario", 
        element: <ExcluirFuncionario/>
      },
      {
        path: "consultar-funcionarios", 
        element: <ConsultarFuncionario/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
