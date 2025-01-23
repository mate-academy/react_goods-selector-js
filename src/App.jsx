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
  const [selectGood, setSelectGood] = useState('Jam');

  return (
    <main className="section container">
      {selectGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectGood} is selected
          <button
            onClick={() => {
              setSelectGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={classNames({
                'has-background-success-light': selectGood.includes(good),
              })}
            >
              <td>
                <button
                  data-cy={
                    selectGood.includes(good) ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={classNames('button', {
                    'is-info': selectGood.includes(good),
                  })}
                  onClick={() => {
                    const action = selectGood.includes(good) ? 'remove' : 'add';

                    if (action === 'add') {
                      setSelectGood(good);
                    } else {
                      setSelectGood('');
                    }
                  }}
                >
                  {selectGood.includes(good) ? '-' : '+'}
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
