import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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

const goodsList = goods.map((name, index) => ({
  name,
  key: index + 1,
}));

export const App = () => {
  const [goodSelected, setGoodSelected] = useState(goodsList[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodSelected
          ? `${goodSelected.name} is selected`
          : 'No goods selected'
        }
        {goodSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGoodSelected('')}
          />
        )}
      </h1>
      <table className="table">
        <tbody>
          {goodsList.map(good => (
            <tr
              key={good.key}
              data-cy="Good"
              className={good.key === goodSelected.key
                && ('has-background-success-light')}
            >
              <td>
                <button
                  key={good.key}
                  onClick={() => {
                    if (good.key === goodSelected.key) {
                      setGoodSelected('');
                    }

                    if (good.key !== goodSelected.key) {
                      setGoodSelected(good);
                    }
                  }}
                  data-cy={good.key === goodSelected.key
                    ? 'RemoveButton'
                    : 'AddButton'}
                  type="button"
                  className={cn('button',
                    {
                      'is-info': good.key === goodSelected.key,
                    })}
                >
                  {good.key === goodSelected.key
                    ? ('-')
                    : ('+')}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
