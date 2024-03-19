/* eslint-disable max-len */
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import './App.scss';
import { useState } from 'react';

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
        {selected ? `${selected} is selected` : 'No goods selected'}
        {selected && (
          <button
            onClick={() => setSelected(null)}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={`id-${good}`}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': good === selected,
              })}
            >
              <td>
                <button
                  onClick={() => setSelected(good === selected ? null : good)}
                  data-cy={good === selected ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': selected === good,
                  })}
                >
                  {selected === good ? '-' : '+'}
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
