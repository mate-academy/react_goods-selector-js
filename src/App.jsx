import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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

  function isSelected(good) {
    return selectedGood === good;
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={classNames({
                'has-background-success-light': isSelected(good)
              })}
            >
              <td>
                {isSelected(good) ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      setSelectedGood(isSelected(good) ? '' : good);
                    }}
                  >
                    {isSelected(good) ? '-' : '+'}
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setSelectedGood(isSelected(good) ? '' : good);
                    }}
                  >
                    {isSelected(good) ? '-' : '+'}
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
