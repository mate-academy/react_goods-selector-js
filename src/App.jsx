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
  const [selectedGood, setSelected] = useState('Jam');

  const handleButtonClick = (name) => {
    setSelected(name);
  };

  const handleCloseButtonClick = () => {
    setSelected('');
  };

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleCloseButtonClick}
          />
        ) : (
          ''
        )
        }

      </h1>
      <table className="table">
        <tbody>
          {goods.map(name => (
            <tr
              data-cy="Good"
              className={name === selectedGood ? (
                'has-background-success-light'
              ) : ''}
            >
              <td>
                {name === selectedGood ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={handleCloseButtonClick}
                  >
                    -
                  </button>
                ) : (
                  <>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleButtonClick(name)}
                    >
                      +
                    </button>
                  </>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
