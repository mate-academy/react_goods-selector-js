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
  const [good, setGood] = useState('Jam');
  const [selected, setSelected] = useState(true);

  function setSelector(item) {
    setGood(item || '');
    setSelected(!!item);
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected ? (
          <>
            {`${good} is selected`}
            <button
              data-cy="ClearButton"
              onClick={() => setSelector(null)}
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              className={good === item
                ? classNames('has-background-success-light')
                : ''
              }
              key={item}
            >
              <td>
                {good !== item ? (
                  <>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelector(item)}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setSelector(null)}
                    >
                      -
                    </button>
                  </>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
