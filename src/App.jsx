/* eslint-disable react/no-array-index-key */
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
  const startIndex = goods.findIndex(products => products === 'Jam');
  const [activeRow, setActiveRow] = useState(startIndex);

  const [message, setMessage] = useState('Jam');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const RemoveButton = () => {
    setMessage('No goods');
    setActiveRow(null);
    setIsButtonVisible(false);
  };

  return (
    <main className="section container">
      {isButtonVisible ? (
        <h1 className="title is-flex is-align-items-center">
          {message} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              RemoveButton();
            }}
          />
        </h1>
      ) : (
        <h1 className="title">{message} selected</h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr
              key={index}
              data-cy="Good"
              className={
                index === activeRow ? 'has-background-success-light' : ''
              }
            >
              <td>
                {index === activeRow ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      RemoveButton();
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setMessage(`${good}`);
                      setActiveRow(index);
                      setIsButtonVisible(true);
                    }}
                  >
                    +
                  </button>
                )}
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
