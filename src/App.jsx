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
  const [title, setTitle] = useState('Jam');

  const handleButtonClick = (good) => {
    setTitle(prevTitle => (prevTitle === good ? '' : good));
  };

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {title ? `${title} is selected` : 'No goods selected'}

        <button
          onClick={() => setTitle('')}
          data-cy="ClearButton"
          type="button"
          className={title ? 'delete ml-3' : 'botton-hidden'}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = title === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isGoodSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    onClick={() => handleButtonClick(good)}
                    data-cy="AddButton"
                    type="button"
                    className={isGoodSelected ? 'button is-info' : 'button'}
                  >
                    {isGoodSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
