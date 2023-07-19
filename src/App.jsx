import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {
          selectedGood.length > 0
            ? `${selectedGood} is selected`
            : 'No goods selected'
        }

        {selectedGood.length > 0 && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={
              () => setGood('')
            }
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                cn({ 'has-background-success-light': good === selectedGood })
              }
            >
              <td>
                <button
                  data-cy={good === selectedGood ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={
                    cn('button', { 'is-info': good === selectedGood })
                  }
                  onClick={
                    () => (
                      good === selectedGood
                        ? setGood('')
                        : setGood(good)
                    )
                  }
                >
                  {good === selectedGood ? '-' : '+'}
                </button>
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
