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
  const [selectedGood, setValue] = useState('Jam');

  const renderActionButton = good => (
    <button
      onClick={() => setValue(good === selectedGood ? '' : good)}
      data-cy={good === selectedGood ? 'RemoveButton' : 'AddButton'}
      type="button"
      className={`button ${good === selectedGood ? 'is-info' : ''}`}
    >
      {good === selectedGood ? '-' : '+'}
    </button>
  );

  return (
    <div className="App">
      <main className="section container">
        <div className="is-flex is-align-items-center">
          <h1 className="title">
            {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          </h1>

          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setValue(null)}
            />
          )}
        </div>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={selectedGood === good
                  ? 'has-background-success-light' : ''}
              >
                <td>{renderActionButton(good)}</td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
