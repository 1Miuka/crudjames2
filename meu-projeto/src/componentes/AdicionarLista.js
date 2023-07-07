import React from 'react';
import Adicionar from './Adicionar';

export default function AdicionarLista(props) {
    return (
        <div className='mt-3'>
        {props.adicionados.map((add) => (
          <Adicionar
            add={add}
            key={add.id} 
            dellPessoa={props.dellPessoa}
            pegarPessoa={props.pegarPessoa}
          />
        ))}
      </div>
    )
}