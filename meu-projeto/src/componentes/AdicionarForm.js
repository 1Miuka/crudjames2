import {useEffect, useState} from 'react';

const pessoaInicial = {
    id: 0,
    nome: '',
    sala: '',
    curso: '',
    desafio: '',
    periodo: 0,
    horario: 0
}

export default function AdicionarForm(props) {

    const [adicionados, setAdicionados] = useState(pessoaAtual())

    useEffect(() => {
        if(props.selecPessoa.id !== 0)
            setAdicionados(props.selecPessoa);
    }, [props.selecPessoa])

    const inputTextHandler = (e) => {
        const {name, value} = e.target;
    setAdicionados({...adicionados, [name]: value})
    }

    const handleCancelar = (e) => {
        e.preventDefault();

        props.cancelarPessoa()

    setAdicionados(pessoaInicial);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(props.selecPessoa.id !== 0)
            props.atualizarPessoa(adicionados)
        else
            props.addPessoa(adicionados)
        setAdicionados(pessoaInicial)
    
        /*if(window.localStorage.getItem('data') == null) {
          window.localStorage.setItem('data', '[]');
        } 
  
        var old_data = JSON.parse(window.localStorage.getItem('data'));

        old_data.push(adicionados);
        window.localStorage.setItem('data', JSON.stringify(old_data))
        console.log(old_data)*/
    }

    function pessoaAtual() {
        if (props.selecPessoa.id !== 0){
            return props.selecPessoa;
        }
        else {
            return pessoaInicial;
        }
    }

    return (
    <>
        <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="inputnome" className="form-label">Nome</label>
          <input id="nome" onChange={inputTextHandler} name='nome' value={adicionados.nome} type="text" placeholder="nome" className="form-control"/>
        </div>
        <div className="col-md-3">
          <label htmlFor="inputnome" className="form-label">Sala</label>
          <input id="sala" onChange={inputTextHandler} name='sala' value={adicionados.sala} type="text" placeholder="sala" className="form-control"/>
        </div>

        <div className="col-md-3">
          <label htmlFor="inputnome" className="form-label">Curso</label>
          <input id="curso" onChange={inputTextHandler} name='curso' value={adicionados.curso} type="text" placeholder="curso" className="form-control"/>
        </div>

        <div className="col-md-4">
          <label htmlFor="inputnome" className="form-label">Desafio</label>
          <input id="desafio" onChange={inputTextHandler} name='desafio' value={adicionados.desafio} type="text" placeholder="desafio" className="form-control"/>
        </div>
        
        <div className="col-md-3">
         <label className="form-label">Periodo</label>
          <select id="periodo" onChange={inputTextHandler} name='periodo' value={adicionados.periodo} className="form-select">
            <option defaultValue='0'>Periodo...</option>
            <option>Matutino</option>
            <option>Vespertino</option>
            <option>Noturno</option>
          </select>
        </div>

        <div className="col-md-3">
         <label className="form-label">Horario</label>
          <select id="horario" onChange={inputTextHandler} name='horario' value={adicionados.horario} className="form-select">
            <option defaultValue='0'>Horario...</option>
            <option>6h - 12h</option>
            <option>13h - 18h</option>
            <option>19h - 23h</option>
          </select>
        </div>


        <div className="col-12">
            {
                adicionados.id === 0 ?
                <button type='submit' className="btn btn-primary"> Adicionar</button>
                :
                <>
                <button type='submit' className="btn btn-outline-success me-2"> Salvar</button>
                <button onClick={handleCancelar} className="btn btn-outline-warning me-2">Cancelar</button>
                </>
            }
        </div>
      </form>
    </>
    )
}