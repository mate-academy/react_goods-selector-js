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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const selectedTitle = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  const removeGoodsButton = selectedGood && (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={() => setSelectedGood('')}
    />
  );

  const AddSelectButton = ({ good }) => (
    <button
      data-cy="AddButton"
      type="button"
      onClick={() => setSelectedGood(good)}
      className="button"
    >
      +
    </button>
  );
  const RemoveSelectButton = () => (
    <button
      data-cy="RemoveButton"
      type="button"
      onClick={() => setSelectedGood('')}
      className="button is-info"
    >
      -
    </button>
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedTitle}
        {removeGoodsButton}
      </h1>
      <table className="table">
        <tbody>
          {goods.map((good) => {
            const selected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn('', {
                  'has-background-success-light': selected,
                })}
              >
                <td>
                  {selected
                    ? <RemoveSelectButton />
                    : <AddSelectButton good={good} />
                  }
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
