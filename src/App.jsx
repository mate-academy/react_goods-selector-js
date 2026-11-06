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
  const [selectedGood, setGood] = useState(`Jam`);
  const [selected, setSelected] = useState(true);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected ? `${selectedGood} is selected` : 'No goods selected'}
        {selected ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelected(false);
              setGood('');
            }}
          />
        ) : (
          ''
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const selectedG = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={selectedG ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={selectedG ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${selectedG ? 'is-info' : ''}`}
                    onClick={() => {
                      if (selectedG) {
                        setSelected(false);
                        setGood('');
                      } else {
                        setGood(good);
                        setSelected(true);
                      }
                    }}
                  >
                    {selectedG ? '-' : '+'}
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
