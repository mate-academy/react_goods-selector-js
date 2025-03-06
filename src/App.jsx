import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

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

  // Очищення вибору
  const clearSelection = () => {
    setSelectedGood('');
  };

  // заміна попереднього вибору
  const handleSelect = good => {
    setSelectedGood(good);
  };

  return (
    <main className="section container has-background-white">
      <h1 className="title is-flex is-align-items-center has-text-dark">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          />
        )}
      </h1>
      <table className="table has-background-white-bis">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {isSelected ? (
                    //  RemoveButton для інших
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={clearSelection}
                    >
                      -
                    </button>
                  ) : (
                    //  AddButton невибрані
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button has-text-black has-background-white"
                      onClick={() => handleSelect(good)}
                    >
                      +
                    </button>
                  )}
                </td>
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered has-text-black-bis"
                >
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
