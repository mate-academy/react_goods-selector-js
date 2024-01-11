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
  const [curGood, setCurGood] = useState('Jam');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {
        curGood === ''
          ? 'No goods selected'
          : `${curGood} is selected`}

        {curGood !== '' && (
          <button
            onClick={() => setCurGood('')}
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
              data-cy="Good"
              key={good}
              className={`${curGood === good && 'has-background-success-light'}`}
            >
              <td>
                <button
                  onClick={() => {
                    setCurGood(curGood === good ? '' : good);
                  }}
                  data-cy={`${curGood === good ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={`button ${curGood === good ? 'is-info' : ''}`}
                >
                  {curGood === good ? '-' : '+'}
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
