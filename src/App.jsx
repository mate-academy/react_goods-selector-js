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
  const [value, setValue] = useState('Jam is selected');

  function getTitle(item) {
    return value.startsWith(item) ? setValue('No goods selected') : setValue(`${item} is selected`);
  }

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {value}
        {
          !value.startsWith('No')
          && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setValue('No goods selected')}
            />
          )
        }
      </h1>
      <table className="table">
        <tbody>
          {
          goods.map((item) => {
            const flag = value.startsWith(item);

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
                    onClick={() => getTitle(item)}
                  >
                    {flag ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </main>
  );
};
