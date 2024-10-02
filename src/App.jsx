import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
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

  return (
    <main className="section container">
      {!(selectedGood === '') ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelected('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(item => {
            const isSelectedGood = item === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={item}
                className={cn({
                  'has-background-success-light': isSelectedGood,
                })}
              >
                <td>
                  <button
                    data-cy={!isSelectedGood ? 'AddButton' : 'RemoveButton'}
                    type="button"
                    className={cn('button', { 'is-info': isSelectedGood })}
                    onClick={() => {
                      setSelected(isSelectedGood ? '' : item);
                    }}
                  >
                    {isSelectedGood ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
