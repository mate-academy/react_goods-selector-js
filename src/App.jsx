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
  const [selectedGood, setGood] = useState(goods[goods.indexOf('Jam')]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {`${
          selectedGood ? `${selectedGood} is selected` : 'No goods selected'
        }`}
        {selectedGood && (
          <button
            onClick={() => {
              setGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(prod => {
            const currentGood = prod === selectedGood;

            return (
              <tr
                key={prod}
                data-cy="Good"
                className={currentGood ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    onClick={() => {
                      setGood(!currentGood && prod);
                    }}
                    data-cy={`${currentGood ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={`button ${currentGood && 'is-info'}`}
                  >
                    {currentGood ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {prod}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
