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
  const [goodText, setGoodText] = useState('Jam');

  function removeGood() {
    setGoodText('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodText.length ? `${goodText} is selected` : 'No goods selected'}
        {goodText && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={removeGood}
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
                'has-background-success-light': goodText === good,
              })}
            >
              <td>
                <button
                  data-cy={goodText === good ? `RemoveButton` : `AddButton`}
                  type="button"
                  className={`button
                  ${classNames({
                    'is-info': goodText === good,
                  })}`}
                  onClick={() => {
                    if (goodText === good) {
                      setGoodText('');

                      return;
                    }

                    setGoodText(good);
                  }}
                >
                  {goodText === good ? `-` : `+`}
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
