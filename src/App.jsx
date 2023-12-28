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
  const [goodValue, setGoodValue] = useState('Jam');
  const buttonClass = 'button';
  const buttonValue = '+';
  const activeElementClass = 'has-background-success-light';
  const headerClass = 'title is-flex is-align-items-center';

  return (
    <main className="section container">
      <h1 className={goodValue !== '' ? `${headerClass} is-hidden` : headerClass}>No goods selected</h1>

      <h1 className={goodValue === '' ? `${headerClass} is-hidden` : headerClass}>
        {goodValue}
        {' '}
        is selected

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => {
            setGoodValue('');
          }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              data-cy="Good"
              key={goods.findIndex(item => good === item)}
              className={goodValue === good ? activeElementClass : ''}
            >
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className={goodValue !== good ? buttonClass : `${buttonClass} is-info`}
                  onClick={() => {
                    setGoodValue(good);
                  }}
                >
                  {goodValue === good ? '-' : buttonValue}
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
