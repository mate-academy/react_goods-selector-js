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
  const [addGood, setAddGood] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {
          addGood ? (
            <>
              {`${addGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setAddGood('')}
              />
            </>
          ) : (
            'No goods selected'
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {
            goods.map(good => (
              <tr
                data-cy="Good"
                className={
                  addGood === good ? 'has-background-success-light' : ''}
                key={good}
              >
                <td>
                  <button
                    data-cy={addGood === good ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={addGood === good ? 'button is-info' : 'button'}
                    onClick={() => setAddGood(addGood === good ? '' : good)}
                  >
                    {addGood === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
};
