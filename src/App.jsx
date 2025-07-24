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
  const [value, setValue] = useState(goods[8]);

  const handleClick = el => {
    setValue(prev => (prev === el ? null : el));
  };

  const resetClikc = () => {
    setValue(null);
  };

  return (
    <main className="section container">
      {value ? (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            onClick={resetClikc}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(el => (
            <tr
              data-cy="Good"
              className={classNames('', {
                'has-background-success-light': value === el,
              })}
            >
              <td>
                <button
                  data-cy={value === el ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  onClick={() => handleClick(el)}
                  className={classNames('button', {
                    'is-info': value === el,
                  })}
                >
                  {value === el ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {el}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
