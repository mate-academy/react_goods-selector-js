import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';
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

  function reset() {
    setSelectedGood('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={reset}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    onClick={
                      isSelected ? () => reset() : () => setSelectedGood(good)
                    }
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button', { 'is-info': isSelected })}
                  >
                    {isSelected ? '-' : '+'}
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
