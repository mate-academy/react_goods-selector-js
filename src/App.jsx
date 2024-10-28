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
  const defaultGood = goods.find(good => good === 'Jam');
  const [value, setValue] = useState(defaultGood);

  const handleSelection = good => {
    if (value === good) {
      setValue();
    } else {
      setValue(good);
    }
  };

  return (
    <main className="section container">
      {!value ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue();
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={classNames({
                'has-background-success-light': good === value,
              })}
            >
              <td>
                <button
                  data-cy={good === value ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': good === value,
                  })}
                  onClick={() => handleSelection(good)}
                >
                  {good === value ? '-' : '+'}
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
