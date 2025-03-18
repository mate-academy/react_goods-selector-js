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
  const [value, setValue] = useState('Jam');

  const btn = (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={() => setValue('')}
    />
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value === '' ? 'No goods selected' : `${value} is selected`}
        {value !== '' ? btn : ''}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': good === value,
              })}
            >
              <td>
                <button
                  data-cy={value === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': good === value,
                  })}
                  onClick={() => setValue(value === good ? '' : good)}
                >
                  {value === good ? '-' : '+'}
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
