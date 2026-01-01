import classNames from 'classnames';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {(selectedGood && `${selectedGood} is selected`) || 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table>
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
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button', {
                      'is-info': isSelected,
                    })}
                    onClick={() => setSelectedGood(isSelected ? '' : good)}
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
