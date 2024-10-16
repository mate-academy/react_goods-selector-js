import 'bulma/css/bulma.css';
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
  const [isGood, setGood] = useState('Jam');
  const [isActive, setIsActive] = useState('Jam');

  const handleClick = good => {
    if (isActive === good) {
      setGood('');
      setIsActive(null);
    } else {
      setGood(good);
      setIsActive(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isGood === '' ? 'No goods selected' : `${isGood} is selected`}
        {isGood === '' ? null : (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGood('');
              setIsActive(null);
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                isActive === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={isActive === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={isActive === good ? 'button is-info' : 'button'}
                  onClick={() => {
                    handleClick(good);
                  }}
                >
                  {isActive === good ? '-' : '+'}
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
