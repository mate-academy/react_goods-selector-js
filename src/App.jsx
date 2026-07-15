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
  const [value, setValue] = useState('');
  const [history, sethistory] = useState([]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value === '' ? 'No goods selected' : `${value} is selected`}
      </h1>

      {history.map((onegood, index) => {
        return (
          <h1 className="title is-flex is-align-items-center">
            {onegood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                sethistory(history.filter((_, i) => i !== index));
              }}
            />
          </h1>
        );
      })}

      <table className="table">
        <tbody>
          {goods.map(good => {
            let isSelected = false;

            if (good === value) {
              isSelected = true;
            } else {
              isSelected = false;
            }

            return (
              <tr
                data-cy="Good"
                className={
                  isSelected ? 'has-background-success-light' : 'is-vcentered'
                }
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelected ? 'button is-info' : 'button'}
                    onClick={() => {
                      if (isSelected) {
                        setValue('');
                      } else {
                        setValue(good);
                      }

                      sethistory([...history, good]);
                    }}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle">{good}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
