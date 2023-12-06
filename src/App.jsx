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
  // let selected = '';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => {
            setSelectedGood('');
          }}
        />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGoodSelected = selectedGood === good;
            const chooseGood = () => (isGoodSelected ? undefined : good);
            return (
            <tr
              data-cy="Good"
              className={isGoodSelected
                ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={isGoodSelected
                    ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={isGoodSelected
                    ? 'button is-info' : 'button'}
                  onClick={() => {
                    setSelectedGood(chooseGood());
                  }}
                >
                  { isGoodSelected ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>

            </tr>
          )})}

        </tbody>
      </table>
    </main>
  );
};
