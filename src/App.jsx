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
  const [select, setSelect] = useState('Jam');

  return (
    <main className="section container">
      {select.length ? (
        <h1 className="title is-flex is-align-items-center">
          {`${select} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelect('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map((good, i) => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames(
                { 'has-background-success-light': select === good },
              )}
            >
              <td>
                <button
                  data-cy={good === select ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames(
                    'button',
                    { 'is-info': good === select },
                  )}
                  onClick={() => {
                    if (good === select) {
                      setSelect('');

                      return;
                    }

                    setSelect(good);
                  }}
                >
                  {good === select ? '-' : '+'}
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
