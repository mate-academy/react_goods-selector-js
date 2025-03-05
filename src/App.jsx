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
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      {/* <h1 className="title is-flex is-align-items-center">No goods selected</h1> */}

      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is` : 'No goods'} selected
        {selectedGood && (
          <button
            onClick={() => {
              setGood('');
            }}
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
              className={classNames({
                'has-background-success-light': selectedGood === good,
              })}
              key={good}
              data-cy="Good"
            >
              <td>
                <button
                  onClick={() => {
                    setGood(selectedGood === good ? '' : good);
                  }}
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': selectedGood === good,
                  })}
                >
                  {selectedGood === good ? '-' : '+'}
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
