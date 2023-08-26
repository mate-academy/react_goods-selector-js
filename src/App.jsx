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

  const ItemsList = ({ products }) => (
    <table className="table">
      <tbody>
        {products.map(product => (
          <Item
            key={product}
            product={product}
          />
        ))}
      </tbody>
    </table>
  );

  const RemoveButton = () => (
    <button
      data-cy="RemoveButton"
      type="button"
      className="button is-info"
      onClick={() => setSelectedGood('')}
    >
      -
    </button>
  );

  const Item = ({ product }) => {
    const isSelected = selectedGood === product;

    const rowClass = isSelected
      ? 'has-background-success-light'
      : 'is-vcentered';

    return (
      <tr
        data-cy="Good"
        className={rowClass}
      >
        <td>
          {isSelected
            ? (
              <RemoveButton />
            ) : (
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => setSelectedGood(product)}
              >
                +
              </button>
            )
          }
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {product}
        </td>
      </tr>
    );
  };

  const tableTilte = selectedGood
    ? (`${selectedGood} is selected`
    ) : (
      'No goods selected'
    );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {tableTilte}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <ItemsList products={goods} />
    </main>
  );
};
