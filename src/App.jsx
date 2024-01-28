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
  const [message, setMessage] = useState('Jam is selected');
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [isCloseVisible, setIsCloseVisible] = useState(true);

  const buttonClick = (good) => {
    if (good === selectedGood) {
      setSelectedGood('');
      setMessage('No goods selected');
      setIsCloseVisible(false);
    } else {
      setSelectedGood(good);
      setMessage(`${good} is selected`);
      setIsCloseVisible(true);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}

        <button
          onClick={() => {
            setMessage('No goods selected');
            setSelectedGood('');
            setIsCloseVisible(false);
          }}
          data-cy="ClearButton"
          type="button"
          className={`delete ml-3 ${isCloseVisible ? '' : 'hiden'}`}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const selection
              = good === selectedGood ? '-' : '+';

            return (
              <tr
                data-cy="Good"
                className={`${selection === '-'
                  && 'has-background-success-light'}`}
              >
                <td>
                  <button
                    onClick={() => {
                      buttonClick(good);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    {selection}
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
