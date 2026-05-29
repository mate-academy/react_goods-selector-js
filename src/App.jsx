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
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            onClick={() => setGood('')}
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(goodValue => (
            <tr
              data-cy="Good"
              key={goodValue}
              className={
                goodValue === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={
                    goodValue === selectedGood ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  onClick={() =>
                    goodValue === selectedGood
                      ? setGood('')
                      : setGood(goodValue)
                  }
                  className={`button ${goodValue === selectedGood ? 'is-info' : ''}`}
                >
                  {goodValue === selectedGood ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {goodValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
