import {useEffect, useState} from 'react';
import './App.css';
import AdicionarForm from './componentes/AdicionarForm';
import AdicionarLista from './componentes/AdicionarLista';


function App() {
  const [index, setIndex] = useState(0);
  const [adicionados, setAdicionados] = useState([])
  const [selecPessoa, setSelecionar] = useState({id: 0 })  

  useEffect(() => {
    adicionados.length <= 0 ? setIndex(1):
    setIndex(Math.max.apply(Math, adicionados.map(item => item.id)) + 1)
  }, [adicionados])

  function addPessoa(att) { 

    setAdicionados([...adicionados, {...att, id: index}]);
  }

  function dellPessoa(id){
    const pessoaDeletada = adicionados.filter(adicionar => adicionar.id !== id);
    setAdicionados([...pessoaDeletada]);
  }

  function cancelarPessoa() {
    setSelecionar({id: 0})
  }

  function atualizarPessoa(att){
    setAdicionados(adicionados.map(item => item.id === att.id ? att : item))
    setSelecionar({id: 0})
  }

  function pegarPessoa(id){
    const selecPessoa = adicionados.filter((adicionar => adicionar.id === id));
    setSelecionar(selecPessoa[0])
  }

  return (
    <>
      <AdicionarForm
        addPessoa={addPessoa}
        cancelarPessoa={cancelarPessoa}
        atualizarPessoa={atualizarPessoa}
        selecPessoa={selecPessoa}
        adicionados={adicionados}
      />

      <AdicionarLista
      adicionados={adicionados}
      dellPessoa={dellPessoa}
      pegarPessoa={pegarPessoa}
      />

    </>
  );
}

export default App;