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
  const [goodSelected, setGoodSelected] = useState('Jam');

  const handleClear = () => {
    setGoodSelected('');
  };

  const handleSelected = event => {
    const { target } = event;
    const dataCy = target.getAttribute('data-cy');

    if (dataCy === 'AddButton') {
      const { parentNode } = target;
      const goodTitle = parentNode.nextElementSibling;
      const good = goodTitle.textContent;

      setGoodSelected(good);

      return;
    }

    handleClear();
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodSelected !== ''
          ? `${goodSelected} is selected`
          : `No goods selected`}
        {goodSelected !== '' && (
          <button
            onClick={handleClear}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            if (good === goodSelected) {
              return (
                <tr key={good} data-cy="Good" className="has-background-success-light">
                  <td>
                    <button
                      onClick={handleSelected}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            }

            return (
              <tr key={good} data-cy="Good">
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    onClick={handleSelected}
                    className="button"
                  >
                    +
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
