import 'bulma/css/bulma.css';
import './App.scss';

import React, { useState } from 'react';

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
  const [selectedGood, setSelectedGood] = useState('Jam');

  // Função para limpar a seleção
  const handleClearSelection = () => {
    setSelectedGood('');
  };

  // Função para selecionar um produto
  const handleSelectGood = goodName => {
    setSelectedGood(goodName);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            // Cria uma variável para armazenar o botão a ser renderizado
            let buttonToRender;

            if (good === selectedGood) {
              buttonToRender = (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={handleClearSelection}
                >
                  -
                </button>
              );
            } else if (selectedGood === '') {
              buttonToRender = (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => handleSelectGood(good)}
                >
                  +
                </button>
              );
            } else {
              buttonToRender = null;
            }

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  good === selectedGood ? 'has-background-success-light' : ''
                }
              >
                <td>{buttonToRender}</td>

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
