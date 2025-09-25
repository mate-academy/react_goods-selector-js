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
  const [good, selectedGood] = useState('Jam');
  const [message, setMessage] = useState(`${good} is selected`);
  const [button, setButton] = useState('-');
  const [visible, setVisible] = useState(true);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {visible && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setMessage('No goods selected');
              setVisible(false);
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(x => (
            <tr
              data-cy="Good"
              className={`${good === x && message !== 'No goods selected' ? 'has-background-success-light' : ''}`}
            >
              <td>
                <button
                  data-cy={
                    button === '-' && x === good ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={`button ${button === '-' && x === good && message !== 'No goods selected' ? 'is-info' : ''}`}
                  onClick={() => {
                    selectedGood(x);
                    setMessage(`${x} is selected`);
                    setButton('-');
                    setVisible(true);

                    if (x === good) {
                      selectedGood(null);
                      setMessage('No goods selected');
                      setVisible(false);
                    }
                  }}
                >
                  {x === good && message !== 'No goods selected' ? button : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {x}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
