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

  const getButtonLabel = good => {
    if (selectedGood !== good) {
      return '+';
    }

    if (selectedGood === good) {
      return '-';
    }

    return '+';
  };

  const getClassName = good => {
    if (selectedGood === good) {
      return 'has-background-success-light';
    }

    return '';
  };

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            onClick={() => {
              setSelectedGood('');
            }}
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr data-cy="Good" key={good} className={getClassName(good)}>
              <td>
                {selectedGood === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      setSelectedGood('');
                    }}
                  >
                    {getButtonLabel(good)}
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setSelectedGood(good);
                    }}
                  >
                    {getButtonLabel(good)}
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
