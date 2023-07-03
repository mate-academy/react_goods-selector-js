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
  const [selectedValue, setSelectedValue] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedValue ? (
          <>
            {`${selectedValue} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedValue('')}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={cn({
                'has-background-success-light': good === selectedValue,
              })}
            >
              <td>
                {good === selectedValue ? (
                  <>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setSelectedValue('')}
                    >
                      -
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelectedValue(good)}
                    >
                      +
                    </button>
                  </>
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
