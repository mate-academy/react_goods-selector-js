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
  const [selectedGood, setSelect] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? '' : 'No goods selected'}
      </h1>

      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : ''}
        {selectedGood ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelect(null)}
          />) : ('')}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  selectedGood === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={`button ${selectedGood === good ? 'is-info' : ''}`}
                    onClick={() => {
                      if (selectedGood === good) {
                        setSelect(null);
                      } else {
                        setSelect(good);
                      }
                    }}
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
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
