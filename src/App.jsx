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

const NONE = 'No goods selected';

export const App = () => {
  const [selected, setSelected] = useState('Jam');

  const onClick = (product) => {
    setSelected(selected === product
      ? NONE
      : product);
  };

  // const isSelected = selected === good;
  const isSelected = good => selected === good;

  return (
    <main className="section container">
      {selected !== NONE
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selected} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelected(NONE)}
            />
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
              className={`${isSelected(good) ? 'has-background-success-light' : ''}`}
              data-cy="Good"
              key={good}
            >
              <td>
                <button
                  id={good}
                  onClick={() => onClick(good)}
                  data-cy={isSelected(good)
                    ? 'RemoveButton'
                    : 'AddButton'}
                  type="button"
                  className={`button ${isSelected(good) ? 'is-info' : ''}`}
                >
                  {isSelected(good) ? '-' : '+'}
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
