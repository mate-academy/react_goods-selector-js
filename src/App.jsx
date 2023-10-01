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
  const [selected, setSelected] = useState('Jam');

  const onClick = (product) => {
    setSelected(selected === product
      ? 'No goods selected'
      : product);
  };

  return (
    <main className="section container">
      {selected !== 'No goods selected'
        ? (
          <h1 className="title is-flex is-align-items-center">
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelected('No goods selected')}
            />

            {`${selected} is selected`}

          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              className={`${selected === good ? 'has-background-success-light' : ''}`}
              data-cy="Good"
              key={good}
            >
              <td>
                <button
                  id={good}
                  onClick={() => onClick(good)}
                  data-cy={selected === good
                    ? 'RemoveButton'
                    : 'AddButton'}
                  type="button"
                  className={`button ${selected === good ? 'is-info' : ''}`}
                >
                  {selected === good ? '-' : '+'}
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
