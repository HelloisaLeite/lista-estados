import { useEffect, useState } from 'react';
import Estado from './components/Estado'
import './App.css'

function App() {
  const [estados, setEstados] = useState([]);

  async function buscarEstados() {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const dados = await resposta.json();

    setEstados(dados)
  }

  useEffect(() => {
    buscarEstados();
  }, []);

  return (
   <main className="app">
      <h1>Estados do Brasil</h1>

      <div className="grade">
        {estados.map((estado) => (
          <Estado
            key={estado.id}
            sigla={estado.sigla}
            nome={estado.nome}
            regiao={estado.regiao.nome}
          />
        ))}
      </div>

    </main>
  )
}

export default App
