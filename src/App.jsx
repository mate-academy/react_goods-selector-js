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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [title, setTitle] = useState(`${selectedGood} is selected`);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title}
        {isVisible && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setIsVisible(false);
              setTitle('No goods selected');
              setSelectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
              {selectedGood === good ? (
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      setSelectedGood('');
                      setTitle('No goods selected');
                      setIsVisible(false);
                    }}
                  >
                    -
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setSelectedGood(good);
                      setTitle(`${good} is selected`);
                      setIsVisible(true);
                    }}
                  >
                    +
                  </button>
                </td>
              )}

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
