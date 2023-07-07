import React from 'react';

export default function Adicionar(props) {
    return (
        <div className='card mb-2 shadow-sm'>
        <div className='card-body'>
          <div className='d-flex justifity-content-between'>
            <h5 className='card-title'>
              <span>
                {props.add.id}
              </span>
              - ID | {props.add.nome}  
              </h5>
          </div>
          <div className='justify-content-end border-top pt-2 m-0'>
            <h6>CURSO: {props.add.curso}<br></br>SALA: {props.add.sala}<br></br>DESAFIO: {props.add.desafio}<br></br>PERIODO: {props.add.periodo}<br></br>HORARIO: {props.add.horario}</h6>
          </div>
          <div className='d-flex justify-content-end border-top pt-2 m-0'>
            <button className='btn btn-sm btn-outline-primary me-2' onClick={() => props.pegarPessoa(props.add.id)}><i className='fas fa-pen me-2'></i>Editar</button>
            <button className='btn btn-sm btn-outline-danger' onClick={() => props.dellPessoa(props.add.id)}><i className='fas fa-trash me-2'></i>Deletar</button>
          </div>
        </div>
      </div>
    )
}