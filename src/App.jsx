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

export function App() {
  const [selectedGood, setValue] = useState('Jam');
  const isSelected = goodName => goodName === selectedGood;
  const selectGood = goodName => setValue(isSelected(goodName) ? '' : goodName);
  const isEmptyState = () => selectedGood === '';
  const heading = isEmptyState()
    ? `No goods selected`
    : `${selectedGood} is selected`;
  const selectedGoodClassName = 'has-background-success-light';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {heading}
        {!isEmptyState() && (
          <button
            onClick={() => setValue('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(goodName => (
            <tr
              data-cy="Good"
              className={isSelected(goodName) ? selectedGoodClassName : ''}
            >
              <td>
                <button
                  onClick={() => (selectGood(goodName))}
                  data-cy={isSelected(goodName) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={isSelected(goodName) ? 'button is-info' : 'button'}
                >
                  {isSelected(goodName) ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {goodName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
