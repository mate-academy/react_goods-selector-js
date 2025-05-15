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
  const [sign, setSign] = useState('-');
  const [highlight, setHighlight] = useState('button is-info');
  const [hasBackground, setHasBackground] = useState(
    'has-background-success-light',
  );
  const [hasButton, setHasButton] = useState('RemoveButton');

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            onClick={() => {
              setSelectedGood();
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                data-cy="Good"
                className={good === selectedGood ? hasBackground : ''}
                key={good}
              >
                <td>
                  <button
                    onClick={() => {
                      if (selectedGood !== good) {
                        setSelectedGood(good);
                        setSign('-');
                        setHighlight('button is-info');
                        setHasBackground('has-background-success-light');
                        setHasButton('RemoveButton');
                      } else {
                        setSelectedGood();
                      }
                    }}
                    data-cy={good === selectedGood ? hasButton : 'AddButton'}
                    type="button"
                    className={good === selectedGood ? highlight : 'button'}
                  >
                    {good === selectedGood ? sign : '+'}
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
