import 'bulma/css/bulma.css';
import './App.scss';
import { useState, useCallback } from 'react';

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

  const selectGood = useCallback(
    name =>
      selectedGood === name ? setSelectedGood('') : setSelectedGood(name),
    [selectedGood],
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? 'No goods selected' : `${selectedGood} is selected`}
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
          {goods.map(el => {
            const isActive = selectedGood === el;

            const goodClass = isActive ? 'has-background-success-light' : '';
            const buttonClass = isActive ? 'button is-info' : 'button';

            return (
              <tr data-cy="Good" className={goodClass}>
                <td>
                  <button
                    data-cy={isActive ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={buttonClass}
                    onClick={() => selectGood(el)}
                  >
                    {isActive ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {el}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
