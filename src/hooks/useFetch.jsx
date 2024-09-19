import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [dados, setDados] = useState(null)

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [chamadaFetch, setChamadaFetch] = useState(null)

    const [loading, setLoading] = useState(false)
    
    const [error, setError] = useState(null)

    /// isso aqui configura nosso objeto
    const httpsConfig = (dados, method) => {

        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(dados)
            })

            setMethod(method)
        }
    }
    /// isso aqui faz a "pesquisa" envia os dados do usuario para o server
    useEffect(() => {

        async function getDados() {
            
            setError(null)
            try {
                setLoading(true)

                const res = await fetch(url)
                const json = await res.json()
        
                setDados(json)
            } catch (error) {
                console.log(error)   
                setError("Houve um erro! Tente novamente.")
            }
            setLoading(false)
          }
      
          getDados() 

    }, [url, chamadaFetch])

    /// envia os dados
    useEffect(() => {
        let json

        const httpsRequisicao = async () => {

            setError(null)
            try {
                if(method === "POST") {
                
                setLoading(true)

                let fetchOpcoes = [url, config]

                const res = await fetch(...fetchOpcoes)

                json = await res.json() 
                }
            } catch (error) {
                console.log(error)   
                setError("Houve um erro! Tente novamente.")
            }
           

            setChamadaFetch(json)
            setLoading(false)
        }

        httpsRequisicao()
    },[config, method, url])

    return { dados, httpsConfig, loading , error}
}