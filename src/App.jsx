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
  const itemToShow = () => {
    if (selectedGood === '') return 'No goods selected';

    return `${selectedGood} is selected`;
  };

  const noItems = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {itemToShow(selectedGood)}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete"
          onClick={noItems}
        />
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                key={good}
                data-cy="Good"
                className={`${selectedGood === good ? 'has-background-success-light' : ''}`}
              >
                <td>
                  <button
                    data-cy={`${selectedGood !== good ? 'AddButton' : 'RemoveButton'}`}
                    type="button"
                    className={`button ${selectedGood === good ? 'is-info' : ''}`}
                    onClick={() => {
                      if (selectedGood !== good) {
                        setSelectedGood(good);
                      } else {
                        setSelectedGood('');
                      }
                    }}
                  >
                    {`${selectedGood === good ? '-' : '+'} `}
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
