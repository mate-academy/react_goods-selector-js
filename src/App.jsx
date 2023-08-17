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

function isSelected(value, good) {
  return value === `${good} is selected`;
}

export const App = () => {
  const [value, setValue] = useState('Jam is selected');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value}
        {
          value !== 'No goods selected'
          && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setValue('No goods selected');
              }}
            />
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                isSelected(value, good) ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={
                    isSelected(value, good) ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={`button ${isSelected(value, good) ? 'is-info' : ''}`}
                  onClick={() => {
                    setValue(isSelected(value, good) ? 'No goods selected' : `${good} is selected`);
                  }}
                >
                  {isSelected(value, good) ? '-' : '+'}
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
