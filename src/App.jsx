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
  const resetGood = () => setSelectedGood('');

  const changingTitleText = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  const clearButton = selectedGood && (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={resetGood}
    />
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {changingTitleText}
        {clearButton}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={classNames({
                'has-background-success-light': selectedGood === good,
              })}
            >
              <td>
                {selectedGood !== good ? (
                  <button
                    onClick={() => setSelectedGood(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                ) : (
                  <button
                    onClick={resetGood}
                    data-cy="RemoveButton"
                    type="button"
                    className="
                    button
                    is-info
                    "
                  >
                    -
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
