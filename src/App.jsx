/* eslint-disable jsx-a11y/click-events-have-key-events */
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
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(n => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <tr
              data-cy="Good"
              key={n}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={classNames({
                'has-background-success-light': n === selectedGood,
              })}
            >
              <td>
                <button
                  data-cy={n === selectedGood ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': n === selectedGood,
                  })}
                  onClick={() => {
                    setSelectedGood(selectedGood === n ? '' : n);
                  }}
                >
                  {n === selectedGood ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {n}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
