import { useState } from 'react';

import 'bulma/css/bulma.css';
import './App.scss';

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

  const handleClearButton = () => {
    setSelectedGood('');
  };

  const handleAddButton = (value) => {
    setSelectedGood(value);
  };

  return (
    <main className="section container">
      {selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleClearButton}
            />
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map((good, i) => {
            const isSelectedGood = good === selectedGood;

            const trClassName
              = isSelectedGood ? 'has-background-success-light' : '';
            const buttonClassname = `button ${isSelectedGood ? 'is-info' : ''}`;

            const buttonText = isSelectedGood ? '-' : '+';

            const dataCy = isSelectedGood ? 'RemoveButton' : 'AddButton';

            const callback = isSelectedGood
              ? handleClearButton
              : handleAddButton;

            return (
              <tr
                data-cy="Good"
                className={trClassName}
                key={good}
              >
                <td>
                  <button
                    data-cy={dataCy}
                    type="button"
                    className={buttonClassname}
                    onClick={() => callback(good)}
                  >
                    {buttonText}
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
