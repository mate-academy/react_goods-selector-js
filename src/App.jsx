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
  const [selectedGood, setSelectedGood] = useState(goods
    .find(item => item === 'Jam') || goods[8]);
  const handleGood = (good) => {
    setSelectedGood(good);

    if (selectedGood === good) {
      setSelectedGood(null);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : `No goods selected`}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => handleGood()}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
              selectedGood === good
                ? 'has-background-success-light'
                : ''
              }
            >
              <td>
                <button
                  data-cy={
                    selectedGood === good
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    selectedGood === good
                      ? 'button is-info'
                      : 'button'}
                  onClick={() => handleGood(good)}
                >
                  {selectedGood === good ? '-' : '+'}
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
