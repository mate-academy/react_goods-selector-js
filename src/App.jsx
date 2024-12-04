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
  const [message, setValue] = useState('Jam is selected');
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [isButtonVisible, setButtonVisible] = useState(true);

  const handleAddClick = good => {
    setSelectedGood(good);
    setValue(`${good} is selected`);
    setButtonVisible(true);
  };

  const handleRemoveClick = () => {
    setSelectedGood(null);
    setValue('No goods selected');
    setButtonVisible(false);
  };

  const handleClearClick = () => {
    setSelectedGood(null);
    setValue('No goods selected');
    setButtonVisible(false);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {isButtonVisible && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearClick}
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
              <td>
                {selectedGood === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={handleRemoveClick}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleAddClick(good)}
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
