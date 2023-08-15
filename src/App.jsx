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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGood === '' ? 'No goods selected' : `${selectedGood} is selected`}
        {selectedGood !== ''
          && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map((item) => {
            const flag = selectedGood === item;

            return (
              <tr
                data-cy="Good"
                key={item}
                className={classNames({
                  'has-background-success-light': flag,
                })}
              >
                <td>
                  <button
                    data-cy={classNames(flag
                      ? 'RemoveButton'
                      : 'AddButton')}
                    type="button"
                    className={classNames('button',
                      { 'is-info': flag })}
                    onClick={() => setSelectedGood(!flag ? item : '')}
                  >
                    {flag ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
