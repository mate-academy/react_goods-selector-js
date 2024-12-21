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
  const [message, setMessage] = useState('Jam is selected');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {selectedGood && (
          <button
            onClick={() => {
              setSelectedGood('');
              setMessage('No goods selected');
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
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': selectedGood === good,
              })}
            >
              <td>
                <button
                  type="button"
                  data-cy={
                    good === selectedGood ? "RemoveButton" : "AddButton"
                  }
                  className={classNames('button', {
                    'is-info': good === selectedGood,
                  })}
                  onClick={() => {
                    if (good !== selectedGood) {
                      setSelectedGood(good);
                      setMessage(`${good} is selected`);
                    } else {
                      setSelectedGood('');
                      setMessage('No goods selected');
                    }
                  }}
                >
                  {good === selectedGood ? '-' : '+'}
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
