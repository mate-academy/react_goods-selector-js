import { useState } from 'react';

export const nomes = ['maçã', 'romulo', 'pera', 'clara', 'honey'];

export const App2 = () => {
  const [selecionarNomes, setSelecionarNomes] = useState('romulo');

  return (
    <main>
      {selecionarNomes ? (
        <h1 style={{ display: 'flex', gap: '20px' }}>
          {selecionarNomes} está selecionado.
          <button
            type='button'
            style={{
              height: '30px',
              width: '30px',
              fontSize: '24px',
              alignItems: 'center',
              display: 'flex',
              paddingInline: '8px',
            }}
            onClick={() => setSelecionarNomes('')}
          >
            -
          </button>
        </h1>
      ) : (
        <h1 style={{ display: 'flex', gap: '20px' }}>
          Nada está Seleciondo
          {/* <button style={{ height: '30px', width: '30px', fontSize: '24px', alignItems: 'center', display: 'flex', paddingInline: '8px' }} onClick={()=> setSelecionarNomes('true')}> + </button> */}
        </h1>
      )}
      <table>
        <tbody>
          {nomes.map(nome => {
            const selecionado = nome === selecionarNomes;

            return (
              <tr
                key={nome}
                style={
                  selecionado
                    ? { background: 'lightgray' }
                    : { background: 'white' }
                }
              >
                <td>{nome}</td>

                <td>
                  {selecionado ? (
                    <button type='button' onClick={() => setSelecionarNomes('')}>-</button>
                  ) : (
                    <button type='button' onClick={() => setSelecionarNomes(nome)}>+</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
