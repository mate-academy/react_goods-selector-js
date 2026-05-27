import React, { useState } from 'react'; // Precisamos importar o useState
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  // 2. Criando o estado com o valor padrão 'Jam'
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {/* 3 e 7. Condicional do Título e 5. Condicional do ClearButton */}
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          {/* 6. Botão que limpa a seleção ao ser clicado */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {/* Usamos o .map para rodar a lógica em cada item do array de goods */}
          {goods.map(good => {
            // Verificamos se o item atual da lista é o que está selecionado
            const isSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                // 4. Se estiver selecionado, adiciona a classe, senão deixa vazio
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {/* 9 e 10. Alternando entre os botões com base na seleção */}
                  {isSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setSelectedGood('')} // Limpa a seleção
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelectedGood(good)} // 8. Seleciona este produto
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
