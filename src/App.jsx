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
  const [selected, setSelected] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected
          ? (
            <>
              {`${selected} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  setSelected('');
                }}
              />
            </>
          ) : (
            'No goods selected'
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = selected === good;

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isGoodSelected,
                })}
                key={good}
              >
                <td>
                  <button
                    data-cy={classNames(
                      {
                        RemoveButton: isGoodSelected,
                        AddButton: !isGoodSelected,
                      },
                    )}
                    type="button"
                    className={classNames('button', {
                      'is-info': selected === good,
                    })}
                    onClick={() => setSelected(isGoodSelected ? '' : good)}
                  >
                    {isGoodSelected ? '-' : '+'}
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
