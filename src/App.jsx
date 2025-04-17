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

export const goodsList = goods.map(good => ({
  title: good,
  id: crypto.randomUUID,
}));

export const App = () => {
  const defaultGood = goods.find(good => good === 'Jam');
  const [selectedGood, selectGood] = useState(defaultGood);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => selectGood(null)}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goodsList.map(good => {
            const isSelected = good.title === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good.id}
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${isSelected ? 'is-info' : ''}`}
                    onClick={() => {
                      selectGood(isSelected ? null : good.title);
                    }}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good.title}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
